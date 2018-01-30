const express = require('express')
const router = express.Router()
const db = require('../../db')
const Telegraph = require('telegra.ph')
const client = new Telegraph()

/* GET home page. */
router.get('/:path&user_id=:userId&access_token=:token', (req, res, next) => {
  let path = req.params.path
  let userId = req.params.userId
  let token = req.params.token
  db.getUser(userId, cb => {
    token === cb.user.token
      ? client.getPage(path, true)
        .then(page => {
          //console.log(page.content)
          res.render('edit', { 
            title: page.title,
            path: path,
            user_id: userId,
            bot_token: process.env.TELEGRAM_TOKEN,
            access_token: token
          })
        })
      : res.render('edit', { title: 'Access denied!' })
  })  
})


module.exports = router
