const isEqual = require('lodash.isequal')

function verifyIsBot(sequenceMoves) {
  let isBot = false

  sequenceMoves.forEach(sequence => {
    sequenceMoves.forEach(newSequences => {
        if (isEqual(sequence, newSequences)) isBot = true
    })
  })

  return isBot
}

module.exports = verifyIsBot