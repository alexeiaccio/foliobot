const PAGE_LENGHT = 600

const findBreakTag = str => {
  let endRegExp = /(<(\/??)(\w+)[\s.*]?>)[^>]*?$/
  let startRegExp = /^.*?[^<]?(<(\/??)(\w+).*?>)/
  
  matchEnd = endRegExp.exec(str)
  matchStart = startRegExp.exec(str)
  
  if (matchEnd[2] !== '/') str += `</${matchEnd[3]}>`
  if (matchStart[2] === '/') str = `<${matchStart[3]}>` + str
  return str
}

const getMaxPage = (text) => 
    Math.floor(text.split('').length / PAGE_LENGHT)

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

const getText = (text, number) => {
  let parts = getPart(text)
  part = parts[(number - 1)]
  console.log(findBreakTag(part))
  return findBreakTag(part)
}

const getString = text => {
  let brRegExp = /(<br\/>)+/g
  let breakRegExp = /(\n)+/g  
  return text
    .replace(brRegExp, '¶')
    .replace(breakRegExp, ' ¶ ')
    .replace(/<\/?p>/g, ' ')
}

module.exports = {
  getMaxPage,
  getText,
  getString
}