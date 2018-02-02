const PAGE_LENGHT = 600

let imgRegExp = /<img\s*?src="(.*?)"\/>/
let endRegExp = /(<(\/??)(\w+)[\s.*]?>)[^>]*?$/
let startRegExp = /^.*?[^<]?(<(\/??)(\w+).*?>)/

const findBreakTag = str => {  
  matchEnd = endRegExp.exec(str)
  matchStart = startRegExp.exec(str)  
  if (matchEnd[2] !== '/') str += `</${matchEnd[3]}>`
  if (matchStart[2] === '/') str = `<${matchStart[3]}>` + str
  return str
}

const getImg = (str) => {
  matchImg = imgRegExp.exec(str)
  let index = str.indexOf(matchImg[0])
  return `${str.slice(0, index)}<a href='${matchImg[1]}'>&#8204;</a>${str.slice(index+matchImg[0].length)}`  
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
    parts.push(part)
  }
  return parts
}

const getText = (text, index) => {
  let parts = getPart(text)
  part = parts[(index - 1)]
  if(imgRegExp.exec(part)) {
    return getImg(findBreakTag(part))
  } 
  
  return findBreakTag(parts[(index - 1)])
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

const getPage = (session, id, text, current) => {
  /* if (!session.page || session.page.id !== id) {
    newSession = Object.assign({}, session)
    let page = {
      id: id,
      max_page: 2,
      parts: [text.split(0, 300), text.split(300)]
    }    
    newSession.page  = page
  }
  session = newSession
  return session.page.parts[current-1] */
  console.log(session)
}

module.exports = {
  getMaxPage,
  getText,
  getString,
  getPage
}