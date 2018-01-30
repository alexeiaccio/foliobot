const { Composer } = require('telegraf')

const composer = new Composer()


// Modules
const getTelegraph = require('./get-telegraph')
const myPages = require('./my-pages')
const telegraphSettings = require('./telegraph-settings')

// Actions
composer.action('get-telegraph', getTelegraph)
composer.action('my-pages', myPages)
composer.action('telegraph-settings', telegraphSettings)

module.exports = composer