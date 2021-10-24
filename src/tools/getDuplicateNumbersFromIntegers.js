function getDuplicateNumbersFromIntegers(numbers) {
  return numbers.filter((number, index) => (
    numbers.indexOf(number) != index)
  )
}

module.exports = getDuplicateNumbersFromIntegers