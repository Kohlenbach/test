function getNeighbouringNumbersFromIntegers(numbers) {
  const normalizedIntegers = []

  numbers.forEach(number => {
      const beforeNumber = number - 1
      const afterNumber = number + 1

      normalizedIntegers.push(beforeNumber, afterNumber)
  });

  return normalizedIntegers
}

module.exports = getNeighbouringNumbersFromIntegers