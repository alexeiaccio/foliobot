const Telegraf = require('telegraf')

// TELEGRAM BOT
const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

module.exports = bot