const PAGE_LENGHT = 600

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
  let part = getPart(text)
  return part[(number - 1)]
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