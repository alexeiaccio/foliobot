const Markup = require('telegraf/markup')
const matchUrl = require('../../util/match-url')

const getOptions = ( current, maxpage ) => {
  let currentPage = parseInt(matchUrl.getQuery(current))
  let maxPage = parseInt(maxpage)
  let thatPath = matchUrl.getBase(current)

  return Markup.inlineKeyboard([
    [
      Markup.urlButton('Web view', `http://telegra.ph/${thatPath}`),
      Markup.switchToChatButton('Forward page', thatPath.toString())
    ], [
      Markup.callbackButton(`↪️ Back`, `${thatPath}?${currentPage}`)
    ]
  ])
}

module.exports = getOptions