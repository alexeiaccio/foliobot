const Telegraph = require('telegra.ph')
const Router = require('telegraf/router')
const Extra = require('telegraf/extra')
const client = new Telegraph()
const { getMaxPage, getText, getString, getPage } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')
const matchUrl = require('../../util/match-url')
const getPagination = require('../helpers/get-pagination')
const getOptions = require('../helpers/get-options')
const options = require('../options')


let previousPage = '1'
let isAddition = false

const markup = Extra
  .HTML()
  .markup((m) => m.inlineKeyboard([
    m.callbackButton('Plus', 'add?2'),
    m.callbackButton('Clear', 'clear')
  ]))

const callbackQueryHandler = new Router(({ callbackQuery }) => {
  if (!callbackQuery.data) {
    return
  }
  const parts = callbackQuery.data.split('?')
  return {
    route: 'add',
    state: {
      path: parts[0],
      current: parseInt(parts[1]) || 1
    }
  }
})

callbackQueryHandler.on('turn', (ctx) => {
  console.log(ctx.state)
  let thatPath = ctx.state.path
  let currentPage = ctx.state.current

  //ctx.session.pages = ctx.session.pages || []


  //getPage(ctx, text)
  
  /* client.getPage(thatPath, true)
  .then(page => {
    let text = ''
    if (!page.title.includes('FolioBot')) {
      text += `<strong>${page.title}</strong> ¶ `    
    }
    text += getString(jsonxml(page.content))
    let maxPage = getMaxPage(text)
    let paginatedText = maxPage>1 
    ? `${getText(text, currentPage)}` 
    : text


    let editOptions = Object.assign({}, 
      { reply_markup: getPagination(`${thatPath}?${currentPage}`, maxPage) },
      options.parse_mode
    )    
    let additionOptions = Object.assign({}, 
      { reply_markup: getOptions(`${thatPath}?${currentPage}`, maxPage) },
      options.parse_mode
    )    
    if (currentPage !== previousPage) {
      return ctx.editMessageText(
          paginatedText, editOptions
        ).catch(() => undefined), 
        previousPage = currentPage
    } else if (!isAddition) {
      return ctx.editMessageText(
        paginatedText, additionOptions
      ).catch(() => undefined),
      isAddition = !isAddition
    } else {
      return ctx.editMessageText(
        paginatedText, editOptions
      ).catch(() => undefined),
      isAddition = !isAddition
    }
  }) */
})
callbackQueryHandler.on('add', (ctx) => {
  console.log(ctx)
  ctx.session.counter = ctx.session.counter || 0
  ctx.session.counter +=  ctx.state.current
  ctx.editMessageText(`Value: <b>${ctx.session.counter}</b>`, markup).catch(() => undefined)
})
callbackQueryHandler.on('clear', (ctx) => {
  ctx.session.counter = 0
  ctx.editMessageText(`Value: <b>${ctx.session.counter}</b>`, markup).catch(() => undefined)
})
callbackQueryHandler.otherwise((ctx) => {
  ctx.session.counter = ctx.session.counter || 0
  ctx.editMessageText(`Woop! ${ctx.session.counter}`, markup).catch(() => undefined)
})

  
/* const callbackQueryHandler = ({ session, callbackQuery, editMessageText }) => {
  let inline_message_id = callbackQuery.inline_message_id
  let callbackData = callbackQuery.data
  let currentPage = parseInt(matchUrl.getQuery(callbackData))
  let thatPath = matchUrl.getBase(callbackData)

  
  client.getPage(thatPath, true)
  .then(page => {
    let text = ''
    if (!page.title.includes('FolioBot')) {
      text += `<strong>${page.title}</strong> ¶ `    
    }
    text += getString(jsonxml(page.content))
    let maxPage = getMaxPage(text)
    let paginatedText = maxPage>1 
    ? `${getText(text, currentPage)}` 
    : text
    
    // Test session store
    console.log(session)
    getPage(session, inline_message_id, text, currentPage)

    let editOptions = Object.assign({}, 
      { inline_message_id: inline_message_id },
      { reply_markup: getPagination(`${thatPath}?${currentPage}`, maxPage) },
      options.parse_mode
    )    
    let additionOptions = Object.assign({}, 
      { inline_message_id: inline_message_id },
      { reply_markup: getOptions(`${thatPath}?${currentPage}`, maxPage) },
      options.parse_mode
    )    
    if (currentPage !== previousPage) {
      return editMessageText(
          paginatedText, editOptions
        ), 
        previousPage = currentPage
    } else if (!isAddition) {
      return editMessageText(
        paginatedText, additionOptions
      ),
      isAddition = !isAddition
    } else {
      return editMessageText(
        paginatedText, editOptions
      ),
      isAddition = !isAddition
    }
  }) 
} */

module.exports = callbackQueryHandler