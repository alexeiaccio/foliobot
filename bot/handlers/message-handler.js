const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const db = require('../../db')
const Telegraph = require('telegra.ph')
const client = new Telegraph()
const Typograf = require('typograf')
const tp = new Typograf({locale: ['ru', 'en-US']})
const { getMaxPage, getText, getString } = require('../../util/text-handlers')
const jsonxml = require('../../util/json-to-xml')

const getContent = text => {
  let maxPage = getMaxPage(text)
  // Typograf
  let typografedText = tp.execute(text)
  let paraText = ''
  if (maxPage>1) {
    for (let i = 1; i < maxPage; i++) {
      paraText = paraText + `{"tag":"p","children":["${getText(typografedText, i)} "]},`
    }
    paraText = paraText + `{"tag":"p","children":["${getText(typografedText, maxPage)} "]}`
  } else paraText = `{"tag":"p","children":["${typografedText} "]}`
  return paraText
}

const forwardKeyboard = ( page, chat, cb ) => Extra.markup(
  Markup.inlineKeyboard([
    [ Markup.switchToChatButton('Forward page', page.path.toString()) ], 
    [ Markup.urlButton('Edit page in Web', `https://foliobot.accio.pro/edit/${page.path}&user_id=${chat.id}&access_token=${cb.user.token}`) ]
  ])
)
  
const messageHandler = ({ chat, message, replyWithHTML, session }) => {
  let instruction = 'Press the button to forward your message'
  let messageText = message.text.toString()

  if (messageText.indexOf('/') !== 0) {
    // add to Telegraph
    if (messageText.length>600) {
      db.getUser(chat.id, cb => {
        client.token = cb.user.token
        client.createPage(
          `FolioBot-${chat.first_name}${chat.last_name}`,
          '[' + getContent(messageText) + ']',
          `${chat.first_name} ${chat.last_name}`,
          `https:\/\/t.me\/${chat.username}`,
          true
        )
        .then(page => {
          let text = getString(jsonxml(page.content))
          let maxPage = getMaxPage(text)
          replyWithHTML(`There will be <strong>${maxPage}</strong> pages\n${instruction}`, forwardKeyboard(page, chat, cb))
        })
      })    
    } else if (messageText.indexOf('http') == 0) {
      let pathRegExp = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g
      let thatPath = pathRegExp.exec(messageText)[3]
      db.getUser(chat.id, cb => {
        client.token = cb.user.token
        client.getPage(thatPath, true)
        .then(page => {    
          let text = getString(jsonxml(page.content))
          let maxPage = getMaxPage(text)
          if (maxPage > 0) {
            replyWithHTML(`There will be <strong>${maxPage}</strong> pages\n${instruction}`, forwardKeyboard(page, chat, cb))            
          } else replyWithHTML('This text is too short – you can send it as is it (^_^)') 
        })
      })
    } replyWithHTML('Your text is too short – you can send it as is it (^_^)')    
  }
}

module.exports = messageHandler