const options = require('../options')

const instructionMessage = `\
🚧 Under construction 🚧

Here will be some adjusting functions ...

<a href='https://github.com/alexeiaccio/Foliobot/issues'>Write me</a> your advices.
`

const telegraphSettings = ({ chat, replyWithHTML }) => { 
  replyWithHTML(instructionMessage, options.parse_mode)
}

module.exports = telegraphSettings