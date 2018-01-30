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

module.exports = composer