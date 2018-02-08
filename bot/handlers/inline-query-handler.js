const Telegraph = require('telegra.ph')
const Router = require('telegraf/router')
const client = new Telegraph()
const { getPart, getString } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')
const getPagination = require('../helpers/get-pagination')
const options = require('../options')
const matchUrl = require('../../util/match-url')

const inlineQueryHandler = new Router(async function({ inlineQuery }) {
  let query = inlineQuery.query
  if (!query) {
    return
  }
  let thatPath = ''
  let currentPage
  if(query.length > 2) {
    if (query.indexOf('http') == 0) {
      let pathRegExp = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g
      thatPath = pathRegExp.exec(query)[3]
    } else if (query.indexOf('?')>=0) {
      let parts = inlineQuery.query.split('?')
      currentPage = parseInt(parts[1]) || 1
      thatPath = parts[0]
    } else thatPath = query, currentPage = 1
  }

  const getPageHandle = client.getPage(thatPath, true)

  try {
    const page = await getPageHandle
      
    let text = ''
    if (!page.title.includes('FolioBot')) {
      text += `<strong>${page.title}</strong> ¶ `    
    }
    text += getString(jsonxml(page.content))      
    let parts = getPart(text)

    ctx.session.iqa = ctx.session.iqa || {}
    Object.assign( ctx.session.iqa, { parts: parts } )    
    console.log(ctx.session.iqa.parts.length)

    return {
      route: 'answer',
      state: {
        query: query,
        path: thatPath,
        current: currentPage,
        parts: parts
      }
    }
  } catch(e) {
    return {
      route: 'error',
      state: {
        err: e
      }
    }
  }
})

inlineQueryHandler.on('answer', (ctx) => {
  let inlineQuery = ctx.update.inline_query
  let query = ctx.state.query
  let thatPath = ctx.state.path
  let currentPage = ctx.state.current   
  let parts = ctx.state.parts

  return ctx.answerInlineQuery(
    [{
      type: 'article',
      id: inlineQuery.id, 
      title: !page.title.includes('FolioBot') ? page.title : 'Page me!', 
      description: page.description,
      thumb_url: 'https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png',
      input_message_content: Object.assign({},
        { message_text: parts[currentPage-1] },
        options.parse_mode
      ),
      reply_markup: getPagination(`${query}?1`, parts.length)
    }], 
    { cache_time: 2000 }
  ).catch(() => undefined)  
})

inlineQueryHandler.on('error', (ctx) => {
  let inlineQuery = ctx.update.inline_query
  let err = ctx.state.err

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

inlineQueryHandler.otherwise((ctx) => { console.log(`Woop!`) })

module.exports = inlineQueryHandler