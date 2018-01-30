const options = require('../options')

const instructionMessage = `\
<strong>Page Me Bot's instruction:</strong>

1. Send here any text above 600 signs lenght.

2. Forward large message from any chat to @foliobot.

3. Send command /create in this chat and follow the instructions.

4. Send here <a href='http://telegra.ph/'>Telegraph</a> link.

Use /start to manage your account and /help to get instructions.
`

const helpHandler = ({ replyWithHTML }) => 
  replyWithHTML(instructionMessage, options.parse_mode)


module.exports = helpHandler
