const PAGE_LENGHT = 600

let imgRegExp = /(?:(.*?)(<img\s*?src="(.*?)"\/>))[<img]?/g
let endRegExp = /(<(\/??)(\w+)[\s.*]?>)[^>]*?$/
let startRegExp = /^.*?[^<]?(<(\/??)(\w+).*?>)/

const findBreakTag = (str) => {  
  matchEnd = endRegExp.exec(str)
  matchStart = startRegExp.exec(str)
  if(matchEnd !== null || matchStart !== null) {
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
  strs.push(findBreakTag(`${str.slice(index+lastImg)}`))
  return strs
}

const getMaxPage = (text) => {
  return Math.floor(text.split('').length / PAGE_LENGHT)
}

const getPart = (text) => {
  let parts = []
  let wordArray = text.split(' ')
  let letterCount = text.split('').length
  let partsCount = getMaxPage(text)  
  for (let i = 0; i <= partsCount; i++) {
    let count = wordArray.length / partsCount
    let part = wordArray
      .slice( i < 1 ? 0 : count*(i), count*(i + 1))
      .join(' ')
    parts.push(...isImg(part))
  }
  if (parts[parts.length-1] === '') parts.pop()
  return parts
}

const getText = (text, index) => {
  let parts = getPart(text)
  return parts[(index - 1)]
}

const getString = text => {
  let brRegExp = /(<br\/>)+/g
  let breakRegExp = /(\n)+/g  
  return text
    .replace(brRegExp, '¶')
    .replace(breakRegExp, ' ¶ ')
    .replace(/<\/?p>/g, ' ')
}

// Test sesssion

const getPage = (ctx, text) => {
  let id = ctx.update.callback_query.inline_message_id
  let current = ctx.state.current
  let newSession = ctx.session.pages.slice()
  let key = 'id'
  let values = ctx.session.pages.map(obj => ~Object.keys(obj).indexOf(key) && obj[key]).filter(v => v)
  if (ctx.session.pages.length == 0 || values[0] !== id) {
    let parts = getPart(text)
    let count = parts.length
    let newPage = {
      id,
      count,
      parts
    }    
    newSession.push(newPage)
  }
  ctx.session.pages = newSession
  let pageIndex = ctx.session.pages.findIndex(obj => ~Object.keys(obj).indexOf(key) && obj[key] === id)
  return pageIndex
}

module.exports = {
  getMaxPage,
  getText,
  getString,
  getPage
}