const Markup = require('telegraf/markup')
const Extra = require('telegraf/extra')
const db = require('../../db')
const Telegraph = require('telegra.ph')
const client = new Telegraph()

const startKeyboard = Markup.inlineKeyboard([
  Markup.callbackButton('Get Telegraph Account', 'get-telegraph')
])

const settingsKeyboard = Markup.inlineKeyboard([
  Markup.callbackButton('My Pages', 'my-pages'),
  Markup.callbackButton('Settings', 'telegraph-settings')
])

const createHandler = ({ chat, replyWithHTML }) => {
  db.getUser(chat.id, cb => {
    client.token = cb.user.token
    client.createPage(
      `FolioBot-${chat.first_name}${chat.last_name}`,
      `[{"tag":"p","children":["Place text here ..."]}]`,
      `${chat.first_name} ${chat.last_name}`,
      `https:\/\/t.me\/${chat.username}`,
      false
    )
    .then(page => {
      replyWithHTML(`<strong>Follow this way</strong> ⬇️`, Extra.markup(
        Markup.inlineKeyboard([ 
          [ Markup.urlButton('1. Edit & save 💾 page in Web ', `https://foliobot.accio.pro/edit/${page.path}&user_id=${chat.id}&access_token=${cb.user.token}`) ],
          [ Markup.switchToChatButton('2. Forward your page 📣', page.path.toString()) ]
        ])
      ))
    })      
  })
}

module.exports = createHandler
