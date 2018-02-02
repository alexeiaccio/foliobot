const Telegraph = require('telegra.ph')
const client = new Telegraph()
const { getMaxPage, getText, getString, getPage } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')
const matchUrl = require('../../util/match-url')
const getPagination = require('../helpers/get-pagination')
const getOptions = require('../helpers/get-options')
const options = require('../options')

let previousPage = '1'
let isAddition = false
  
const callbackQueryHandler = ({ session, callbackQuery, editMessageText }) => {
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
}

module.exports = callbackQueryHandler