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

const startHandler = ({ chat, replyWithHTML }) => {
  db.getUser(chat.id, cb => {
    if (cb !== null) {
      client.token = cb.user.token
      client.getPageList()
        .then(pages =>
          replyWithHTML(`You have ${pages.total_count} page${pages.total_count==1 ? '' : 's'}.`, 
              pages.total_count>0
                ? Extra.markup(settingsKeyboard)
                : null
            )
        )
    } else replyWithHTML(
        `First, please create Telegraph account to able to manage you Pages.`, 
        Extra.markup(startKeyboard)
      )
  })
}

module.exports = startHandler
