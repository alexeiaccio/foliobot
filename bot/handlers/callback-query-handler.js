const Telegraph = require('telegra.ph')
const Router = require('telegraf/router')
const client = new Telegraph()
const { getString, getPart } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')
const matchUrl = require('../../util/match-url')
const getPagination = require('../helpers/get-pagination')
const getOptions = require('../helpers/get-options')
const options = require('../options')


let previousPage = '1'
let isAddition = false

const callbackQueryHandler = new Router(({ callbackQuery }) => {
  if (!callbackQuery.data) {
    return
  }
  const parts = callbackQuery.data.split('?')
  return {
    route: parts ? 'turn' : callbackQuery.data, //'woop',
    state: {
      path: parts[0],
      current: parseInt(parts[1]) || 1
    }
  }
})

callbackQueryHandler.on('turn', async function(ctx) {
  let id = ctx.update.callback_query.inline_message_id
  let thatPath = ctx.state.path
  let currentPage = ctx.state.current  
  
  ctx.session.pages = ctx.session.pages || [] 
  ctx.session.counter = ctx.session.counter || 0
  ctx.session.ids = ctx.session.ids || {}
  
  let page = await client.getPage(thatPath, true)   

  let text = ''
  if (!page.title.includes('FolioBot')) {
    text += `<strong>${page.title}</strong> ¶ `    
  }
  text += getString(jsonxml(page.content))
  let parts = getPart(text)

  Object.assign( ctx.session.ids, { [id]: parts } )
  console.log(ctx.session.ids)

  let maxPage = parts.length
  paginatedText = parts[currentPage-1]

  let editOptions = Object.assign({}, 
    { reply_markup: getPagination(`${thatPath}?${currentPage}`, maxPage) },
    options.parse_mode
  )    
  
  if (currentPage !== previousPage) {
    return ctx.editMessageText(
      paginatedText, editOptions
    ).catch(() => undefined), 
    previousPage = currentPage
  } else if (!isAddition) {
    return ctx.editMessageReplyMarkup(
      getOptions(`${thatPath}?${currentPage}`, maxPage)
    ).catch(() => undefined),
    isAddition = !isAddition
  } else {
    return ctx.editMessageReplyMarkup(
      getPagination(`${thatPath}?${currentPage}`, maxPage)
    ).catch(() => undefined),
    isAddition = !isAddition
  }
})

callbackQueryHandler.on('woop', (ctx) => {
  if(!ctx.session.counter) { ctx.session.counter = 0 }
  ctx.session.ids = ctx.session.ids || {}
  let key = ctx.session.counter
  let id = ctx.update.callback_query.id
  console.log(ctx.session.counter, ctx.session.ids)
  Object.assign( ctx.session.ids, { [id]: id } )
  ctx.session.counter++
})

callbackQueryHandler.otherwise((ctx) => { ctx.editMessageText(`Woop!`) })


module.exports = callbackQueryHandler