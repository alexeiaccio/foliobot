const Telegraph = require('telegra.ph')
const client = new Telegraph()
const { getMaxPage, getText, getString } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')
const getPagination = require('../helpers/get-pagination')
const options = require('../options')
const matchUrl = require('../../util/match-url')
  
const inlineQueryHandler = (ctx) => {
  let inlineQuery = ctx.update.inline_query
  let query = inlineQuery.query
  let thatPath = ''
  let currentPage = ''
  if(query.length > 0) {
    if (query.indexOf('http') == 0) {
      let pathRegExp = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g
      thatPath = pathRegExp.exec(query)[3]
    } else if (query.indexOf('?')>=0) {
      currentPage = parseInt(matchUrl.getQuery(query))
      thatPath = matchUrl.getBase(query)
    } else thatPath = query
    client.getPage(thatPath, true)
    .then(page => {
      let text = ''
      if (!page.title.includes('FolioBot')) {
        text += `<strong>${page.title}</strong> ¶ `    
      }
      text += getString(jsonxml(page.content))
      // Let's return a single tooltip
      return ctx.answerInlineQuery(
        [{
          type: 'article',
          id: inlineQuery.id, 
          title: !page.title.includes('FolioBot') ? page.title : 'Page me!', 
          description: page.description,
          input_message_content: Object.assign({},
            { message_text: getText(text, 1) },
            options.parse_mode
          ),
          reply_markup: getPagination(`${query}?1`, getMaxPage(text))
        }], 
        {
          cache_time: 800
        }
      )
    })  
  }
}

module.exports = inlineQueryHandler