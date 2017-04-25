// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.
class Hamming {
  compute (strandA = '', strandB = '') {
    if (strandA.length !== strandB.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    const strandBArray = strandB.split('')

    return strandA.split('').reduce((prev, value, index) => {
      if (value !== strandBArray[index]) {
        return prev + 1
      }

      return prev
    }, 0)
  }
}

module.exports = Hamming;
