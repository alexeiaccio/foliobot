const app = require('./app')
const bot = require('./bot')

// EXPRESS APP
const PORT = process.env.PORT || 5000

if (app.get('env') === 'development') {
  const browserSync = require('browser-sync')
  const bs = browserSync.create()
  bs.watch("**/*.sass").on("change", bs.reload)
  bs.watch("**/*.pug").on("change", bs.reload)
  bs.watch("**/*.js").on("change", bs.reload)
  bs.watch("**/*.md").on("change", bs.reload)
  bs.init({ logSnippet: false })
  app.use(require('connect-browser-sync')(bs, { injectHead: true }))
}

app.set('port', PORT)  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// BOT
bot.use(
  require('./bot/commands'),
  require('./bot/actions'),
  require('./bot/handlers')
)

bot.startPolling()
