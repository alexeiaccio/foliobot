const { Composer } = require('telegraf')

const composer = new Composer()


// Modules
const startHandler = require('./start-handler')
const helpHandler = require('./help-handler')
const createHandler = require('./create-handler')

// Commands
composer.command('start', startHandler)
composer.command('help', helpHandler)
composer.command('create', createHandler)

// Session test
composer.command('session', (ctx) => {
  ctx.session.counter = ctx.session.counter || 0
  ctx.session.counter++
  return ctx.reply(`Message counter:${ctx.session.counter}`)
})
composer.command('stats', ({ reply, session, from }) => reply(`${session.counter} messages from ${from.username}`))

module.exports = composer