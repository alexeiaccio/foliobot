const { Composer } = require('telegraf')

const composer = new Composer()


// Modules
const startHandler = require('./start-handler')
const helpHandler = require('./help-handler')
const createHandler = require('./create-handler')

// Commands
composer.command('start', (ctx) => {
  ctx.session.pages = ctx.session.pages || []
  return ctx.reply(`Pages: <b>${ctx.session.pages}</b>`)
})
composer.command('help', helpHandler)
composer.command('create', createHandler)

module.exports = composer