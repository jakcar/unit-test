module.exports = {
  sum(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i]
    }
    return total
  }
}
