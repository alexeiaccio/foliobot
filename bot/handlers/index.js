const { Composer } = require('telegraf')

const composer = new Composer()


// Modules
const messageHandler = require('./message-handler')
const inlineQueryHandler = require('./inline-query-handler')
const callbackQueryHandler = require('./callback-query-handler')

// Commands
composer.on('message', messageHandler)
composer.on('inline_query', inlineQueryHandler)
composer.on('callback_query', callbackQueryHandler)
composer.on('chosen_inline_result', (ctx) => {
  ctx.session.iqa = ctx.session.iqa || {}
  console.log(ctx.update.chosen_inline_result.inline_message_id, ctx.state)
 })

module.exports = composer