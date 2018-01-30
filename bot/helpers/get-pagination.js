const Markup = require('telegraf/markup')
const matchUrl = require('../../util/match-url')

const getPagination = ( current, maxpage ) => {
    let keysTop = []
    let keysBottom = []
    let currentPage = parseInt(matchUrl.getQuery(current))
    let maxPage = parseInt(maxpage)
    let thatPath = matchUrl.getBase(current)

    if (maxPage>2) {
      if (currentPage==1) {
        keysBottom.push( 
          Markup.urlButton('Web view', `http://telegra.ph/${thatPath}`) 
        )
      } else {
        keysBottom.push( 
          Markup.callbackButton('First', `${thatPath}?1`) 
        )
      }
      keysBottom.push( 
        Markup.callbackButton(`${currentPage} · ${maxPage}`, `${thatPath}?${currentPage}`)
      )
      if (currentPage==maxPage) {
        keysBottom.push( 
          Markup.switchToChatButton('Forward', thatPath.toString()) 
        )
      } else {
        keysBottom.push( 
          Markup.callbackButton(`Last`, `${thatPath}?${maxPage}`) 
        )
      }
    }
    if (maxPage==2 && currentPage==1) {
      keysTop.push( 
        Markup.urlButton('Web view', `http://telegra.ph/${thatPath}`) 
      )
    }
    if (currentPage>1) {
      keysTop.push( 
        Markup.callbackButton('Previous', `${thatPath}?${currentPage - 1}`) 
      )
    }
    if (currentPage<maxPage) {
      keysTop.push( 
        Markup.callbackButton('Next', `${thatPath}?${currentPage + 1}`) 
      )
    }
    if (maxPage==2 && currentPage==maxPage) {
      keysTop.push( 
        Markup.switchToChatButton('Forward', thatPath.toString()) 
      )
    }
    
    return Markup.inlineKeyboard( [ keysTop, keysBottom ] )
  }

  module.exports = getPagination