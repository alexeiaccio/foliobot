const Telegraph = require('telegra.ph')
const Router = require('telegraf/router')
const client = new Telegraph()
const { getString, getPage } = require('../../util/text-handlers')
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
    route: 'turn',
    state: {
      path: parts[0],
      current: parseInt(parts[1]) || 1
    }
  }
})

callbackQueryHandler.on('turn', (ctx) => {
  let thatPath = ctx.state.path
  let currentPage = ctx.state.current  
  ctx.session.pages = ctx.session.pages || []
  client.getPage(thatPath, true)
  .then(page => {
    let text = ''
    if (!page.title.includes('FolioBot')) {
      text += `<strong>${page.title}</strong> ¶ `    
    }
    text += getString(jsonxml(page.content))
    let index = getPage(ctx, text)
    let maxPage = ctx.session.pages[index].count
    let paginatedText = maxPage>1 
      ? ctx.session.pages[index].parts[currentPage-1]
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
  })
})

callbackQueryHandler.otherwise((ctx) => {
  ctx.session.counter = ctx.session.counter || 0
  ctx.editMessageText(`Woop!`).catch(() => undefined)
})


module.exports = callbackQueryHandler