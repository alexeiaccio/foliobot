const PAGE_LENGHT = 600

let imgRegExp = /(?:(.*?)(<img\s*?src="(.*?)"\/>))[<img]?/g
let endRegExp = /(<(\/??)(\w+)[\s.*]?>)[^>]*?$/
let startRegExp = /^.*?[^<]?(<(\/??)(\w+).*?>)/

let strA = `<img src="https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png"/>  ¶  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <strong>How to use?</strong>  First you needto press <code>Start </code>in @foliobot chat. And get a Telegraph account (bot make it automatically).  ¶  Then you can start in this several ways.  ¶  <strong>First step</strong>  1. Send any text above 600 signs lenght in @foliobot chat.  2. Forward large message from any chat to @foliobot.  3. Send command <code>/create</code> in @foliobot chat and follow the instructions.  4. Send Telegraph link in @foliobot chat.  ¶`  
let strG = `<img src="https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png"/>  ¶  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <strong>How to use?</strong>  First you needto press <code>Start </code>in @foliobot chat. And get a Telegraph account (bot make it automatically).`  
let strB = `<strong>Options</strong>  Press on middle button <code>1 · 3</code> to get the additional options.<strong>@foliobot for Telegram</strong> ¶  <em>Here is a @foliobot — Telegram bot for messaging with pagination.</em>  ¶  <img src="https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png"/>`
let strC = `<strong>@foliobot for Telegram</strong> ¶  <em>Here is a @foliobot — Telegram bot for messaging with pagination.</em>  ¶  <img src="https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png"/>  ¶  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <img src="https://github.com/alexeiaccio/logo.png"/>  ¶  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>`
let strD = `<strong>@foliobot for Telegram</strong> ¶  <em>Here is a @foliobot — Telegram bot for messaging with pagination.</em>  ¶  <img src="https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png"/>  ¶  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <img src="https://github.com/alexeiaccio/logo.png"/>  ¶  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em><em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <strong>How to use?</strong>  First you needto press <code>Start </code>in @foliobot chat. And get a Telegraph account (bot make it automatically).  ¶  Then you can start in this several ways.  ¶  <img src="https://github.com/alexeiaccio/master/logo.png"/>  <em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <strong>How to use?</strong>  First you needto press <code>Start </code>in @foliobot chat. And get a Telegraph account (bot make it automatically).  ¶  Then you can start in this several ways.  ¶  <strong>First step</strong>  1. Send any text above 600 signs lenght in @foliobot chat.  2. Forward large message from any chat to @foliobot.  3. Send command <code>/create</code> in @foliobot chat and follow the instructions.  4. Send Telegraph link in @foliobot chat.  ¶`
let strE = `<em>The @foliobot can beautify your large Telegram post with the pretty pagination keyboard instead the sad "More..".</em>  ¶  <strong>How to use?</strong>  First you needto press <code>Start </code>in @foliobot chat. And get a Telegraph account (bot make it automatically).  ¶  Then you can start in this several ways.  ¶  <strong>First step</strong>  1. Send any text above 600 signs lenght in @foliobot chat.  2. Forward large message from any chat to @foliobot.  3. Send command <code>/create</code> in @foliobot chat and follow the instructions.  4. Send Telegraph link in @foliobot chat.  ¶`  
let strF = `<img src="https://github.com/alexeiaccio/foliobot/raw/master/app/public/images/logo.png"/>`  

const findBreakTag = str => {  
  matchEnd = endRegExp.exec(str)
  matchStart = startRegExp.exec(str)
  if (matchEnd) {
    if (matchEnd[2] !== '/') str += `</${matchEnd[3]}>`
    if (matchStart[2] === '/') str = `<${matchStart[3]}>` + str
  }
  return str
}

const isImg = (str) => {
  let matchImg
  let strs = []
  let index, i, lastImg = 0
  while ((matchImg = imgRegExp.exec(str)) !== null) {
    strs.push(`${matchImg[1] ? matchImg[1] : '<em>Image #' + i + ': </em>'}<a href='${matchImg[3]}'>&#8204;</a>`)
    index = str.indexOf(matchImg[2])
    lastImg = matchImg[2].length
    i++
  }
  strs.push(`${str.slice(index+lastImg)}`)
  return strs
}

//isImg(strB)

const getImg = (str, i) => {
  let imgs = isImg(str)
  return imgs[i-1]
}

//console.log(getImg(strD, 4))

const getMaxPage = (text) => {  
  let imgsLenght = isImg(text).length - 1
  if (imgsLenght>0) {
    return Math.floor(text.split('').length / PAGE_LENGHT) + imgsLenght + ((isImg(text)[imgsLenght]) !== '' ? 1 : 0)
  }
  return Math.floor(text.split('').length / PAGE_LENGHT)
}

//console.log(getMaxPage(strD))

const getPart = (text) => {
  let parts = []
  let wordArray = text.split(' ')
  let letterCount = text.split('').length
  let partsCount = Math.floor(text.split('').length / PAGE_LENGHT)  
  for (let i = 0; i <= partsCount; i++) {
    let count = wordArray.length / partsCount
    let part = wordArray
      .slice( i < 1 ? 0 : count*(i), count*(i + 1))
      .join(' ')
    parts.push(part)
  }
  return parts
}

const getText = (text, index) => {
  let parts = getPart(text)
  let imgsLenght = isImg(text).length - 1
  if (imgsLenght>0) {
    let part
    let i = imgsLenght
    while (i > 0) {
      part = parts[(index - i)]
      i--
      console.log(part)
      //return part       
      if (part !== undefined) {
        let partImgs = isImg(part).length - 1
        let partsLenght = partImgs + ((isImg(part)[partImgs]) !== '' ? 1 : 0)
        console.log(partsLenght)
        let i = partsLenght
        while (i = 3) { // !!!!!!
          part = parts[(index - i)]
          i--
          if (part !== undefined) {            
            console.log(part)
            return getImg(findBreakTag(part), 1) // !!!!!!
          }
        }
      }
    }
  }
  return findBreakTag(parts[(index - 1)])
}

//console.log(getText(strD, 4))
//getText(strB, 1)
//getText(strC, 1)
//getText(strD, 1)
//getText(strD, 2)
//getText(strE, 1)

const getString = text => {
  let brRegExp = /(<br\/>)+/g
  let breakRegExp = /(\n)+/g  
  return text
    .replace(brRegExp, '¶')
    .replace(breakRegExp, ' ¶ ')
    .replace(/<\/?p>/g, ' ')
}

// Test sesssion

const getPage = (session, id, text, current) => {
  if (!session.page || session.page.id !== id) {
    newSession = Object.assign({}, session)
    let page = {
      id: id,
      max_page: 2,
      parts: [text.split(0, 300), text.split(300)]
    }    
    newSession.page  = page
  }
  session = newSession
  return session.page.parts[current-1]
}

module.exports = {
  getMaxPage,
  getText,
  getString,
  getPage
}