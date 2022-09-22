import words from '../word-list'

exports.handler = async () => {
  const offsetFromDate = new Date(2020, 0, 1).getTime()
  const offset = Math.floor((Date.now() - offsetFromDate) / 1000 / 60 / 60 / 24) // days since 2020
  const word = words[offset % words.length]

  return {
    statusCode: 200,
    body: JSON.stringify({ word }),
  }
}
