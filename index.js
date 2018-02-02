const mongoose = require("mongoose")
const MongoSession = require('telegraf-session-mongo')
const Router = require('telegraf/router')
const Extra = require('telegraf/extra')

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
    ttl: 3600
  })
  // BOT
  bot.use(
    session.middleware
    //require('./bot/commands'),
    //require('./bot/actions'),
    //require('./bot/handlers')
  )


  const markup = Extra
    .HTML()
    .markup((m) => m.inlineKeyboard([
      m.callbackButton('Plus', 'add'),
      m.callbackButton('Clear', 'clear')
    ]))

  const counter = new Router(({ callbackQuery }) => {
    if (!callbackQuery.data) {
      return
    }
    return { route: callbackQuery.data }
  })
  counter.on('add', (ctx) => {
    ctx.session.counter++
    console.log(ctx.session)
    ctx.editMessageText(`Value: <b>${ctx.session.counter}</b>`, markup).catch(() => undefined)
  })
  counter.on('clear', (ctx) => {
    ctx.session.counter = 0
    ctx.editMessageText(`Value: <b>${ctx.session.counter}</b>`, markup).catch(() => undefined)
  })
  counter.otherwise((ctx) => ctx.editMessageText(`Woop! ${ctx.session.counter}`, markup).catch(() => undefined))

  bot.start((ctx) => {
    ctx.session.counter = ctx.session.counter || 0
    return ctx.reply(`Value: <b>${ctx.session.counter}</b>`, markup)
  })

  bot.on('callback_query', counter)
  
  bot.startPolling()
})

