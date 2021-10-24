function getSumFromIntegers(numbers) {
  return numbers.reduce((firstInteger, secondInteger) => firstInteger + secondInteger)
}

module.exports = getSumFromIntegers