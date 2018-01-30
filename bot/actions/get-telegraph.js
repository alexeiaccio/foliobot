const db = require('../../db')
const Telegraph = require('telegra.ph')
const client = new Telegraph()
const options = require('../options')

const successMessage = account => `\
<strong>SUCCESS!</strong>

Now you have Telegraph account and can start pagging 😄!

1. Send here any text above 600 signs lenght.

2. Forward large message from any chat to @foliobot.

3. Send command /create in this chat and follow the instructions.

4. Send here <a href='http://telegra.ph/'>Telegraph</a> link.

Use /start to manage your account and /help to get instructions.
`

const getTelegraph = ({ chat, replyWithHTML }) => {   
  client.createAccount(
    chat.first_name, 
    `${chat.first_name} ${chat.last_name}`, 
    `https://t.me/${chat.chatname}`
  )
  .then(account => {
    db.addUser({
      id: chat.id,
      token: account.access_token
    })
    replyWithHTML(successMessage(account), options.parse_mode) 
  })
}

module.exports = getTelegraph