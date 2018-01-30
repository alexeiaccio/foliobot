const express = require('express')
const router = express.Router()
const marked = require('marked')
const fs = require('fs')
const path = require('path')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

const text = fs.readFileSync(path.join(__dirname, '../views/components/instructions.md')).toString()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Foliobot for Telegram', 
    md: marked(text),
    bot_token: process.env.TELEGRAM_TOKEN
  })
})

module.exports = router
