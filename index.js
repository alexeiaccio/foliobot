const app = require('./app')
const bot = require('./bot')

// EXPRESS APP
const PORT = process.env.PORT || 5000
app.set('port', PORT)  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// BOT
bot.use(
  require('./bot/commands'),
  require('./bot/actions'),
  require('./bot/handlers')
)

bot.startPolling()
