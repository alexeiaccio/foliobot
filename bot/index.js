const Telegraf = require('telegraf')

// TELEGRAM BOT
const TOKEN = process.env.TELEGRAM_TOKEN
const bot = new Telegraf(TOKEN)

module.exports = bot