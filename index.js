const mongoose = require("mongoose")
const MongoSession = require('telegraf-session-mongo')
const app = require('./app')
const bot = require('./bot')

// EXPRESS APP
const PORT = process.env.PORT || 5000

//if (app.get('env') === 'development') {
//  const browserSync = require('browser-sync')
//  const bs = browserSync.create()
//  bs.watch("**/*.sass").on("change", bs.reload)
//  bs.watch("**/*.pug").on("change", bs.reload)
//  bs.watch("**/*.js").on("change", bs.reload)
//  bs.watch("**/*.md").on("change", bs.reload)
//  bs.init({ logSnippet: false })
//  app.use(require('connect-browser-sync')(bs, { injectHead: true }))
//}

app.set('port', PORT)  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// DB SESSION STORAGE
const uri = process.env.MONGODB_URI

mongoose.connect(uri, {useMongoClient: true}, (err, res) => {
  if (err) {
    console.log('ERROR sessioning with: ' + uri + '. ' + err)
  } else {
    console.log('Succeeded sessioned with: ' + uri)
  }
}).then(client => {
  const session = new MongoSession(client, {
    ttl: 3600,
    getSessionKey: (ctx) => ctx.from && `${ctx.from.id}`
  })
  // BOT
  bot.use(
    session.middleware,
    require('./bot/commands'),
    require('./bot/actions'),
    require('./bot/handlers')
  )
  
  bot.startPolling()
})

