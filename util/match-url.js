// regExp
let baseRegExp = /^(.*?)\?/
let queryRegExp = /\?(.*)/

const matchUrl = {
  getBase: url => baseRegExp.exec(url)[1],
  getQuery: url => queryRegExp.exec(url)[1]
}

module.exports = matchUrl
