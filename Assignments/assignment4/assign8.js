function progressDays(num) {
    let value = 0
    for (let i = 1; i < num.length; i++) {
      if (num[i] > num[i - 1]) {
        value++
      }
    }
    return value
  }
  console.log(progressDays([3, 4, 1, 2]))
  console.log(progressDays([10, 11, 12, 9, 10]))
  console.log(progressDays([6, 5, 4, 3, 2, 9]))
  console.log(progressDays([9, 9]))

