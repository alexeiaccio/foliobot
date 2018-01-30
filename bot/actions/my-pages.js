const Markup = require('telegraf/markup')
const db = require('../../db')
const Telegraph = require('telegra.ph')
const client = new Telegraph()
const options = require('../options')

const getMyPages = (pages, id, token) => {
  let str = ''
  pages.forEach(page => 
    str += 
    `<a href='https://foliobot.accio.pro/edit/${page.path}&user_id=${id}&access_token=${token}'>${page.title}</a>\n${page.description.slice(0, 40)}...\n\n`
  )
  return str
}

const myPages = ({ chat, replyWithHTML }) => {
  db.getUser(chat.id, cb => {
    client.token = cb.user.token
    client.getPageList(null, 0, 5)
    .then(pages => {
      let message = ''
      let links = getMyPages(pages.pages, chat.id, cb.user.token)
      message = links
      message += `<strong>Total pages: ${pages.total_count.toString()}</strong>`
      replyWithHTML(
        message, options.parse_mode
      )
    })
  })
}

module.exports = myPages