const Telegraph = require('telegra.ph')
const client = new Telegraph()
const { getPart, getString } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')
const getPagination = require('../helpers/get-pagination')
const options = require('../options')
  
const inlineQueryHandler = (ctx) => {
  let inlineQuery = ctx.update.inline_query
  let query = inlineQuery.query  
  ctx.session.pages = ctx.session.pages || []

  if(query.length > 0) {
    let thatPath = ''
    let currentPage = 1
    if(query.length > 0) {
      if (query.indexOf('http') == 0) {
        let pathRegExp = /(?:http:\/\/telegra.ph\/)(.*)/g
        thatPath = pathRegExp.exec(query)[1]
      } else if (query.indexOf('?')>=0) {
        let parts = inlineQuery.query.split('?')
        currentPage = parseInt(parts[1]) || 1
        thatPath = parts[0]
      } else thatPath = query
    }

    client.getPage(thatPath, true)
    .then(page => {
      let text = ''
      if (!page.title.includes('FolioBot')) {
        text += `<strong>${page.title}</strong> ¶ `    
      }
      text += getString(jsonxml(page.content))
      let pages = getPart(text)
      let maxPage = pages.length
      
      return ctx.answerInlineQuery(
        [{
          type: 'article',
          id: inlineQuery.id, 
          title: !page.title.includes('FolioBot') ? page.title : 'Page me!', 
          description: page.description,
          thumb_url: 'https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png',
          input_message_content: Object.assign({},
            { message_text: pages[currentPage - 1] },
            options.parse_mode
          ),
          reply_markup: getPagination(`${query}?1`, maxPage)
        }], 
        {
          cache_time: 800
        }
      )
    }).catch((err) => {
      if (err.toString().search(/PAGE/)) {
        title = `Page not found.`
        description = `Try other pathway...`
      } else {
        title = 'Error...'
        description = `Something is wrong. ${err}`
      }
      return ctx.answerInlineQuery(
        [{
          type: 'article',
          id: inlineQuery.id, 
          title: title, 
          description: description,
          input_message_content: Object.assign({},
            { message_text: `<b>${title}</b> ${description}` },
            options.parse_mode
          )
        }], 
        {
          cache_time: 200
        }
      )
    })
  }
}

module.exports = inlineQueryHandler