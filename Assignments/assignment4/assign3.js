function totalVolume(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      const box = arr[i]    //Get the box at the current index.
      const volume = box.reduce(function (acc, cv) {
        return acc * cv
      }, 1)
      total += volume
    }
    return total
  }
  console.log(totalVolume([[4, 2, 4],[3, 3, 3],[1, 1, 2],[2, 1, 1]]))
  console.log(totalVolume([[2, 2, 2],[2, 1, 1]]))
  console.log(totalVolume([[1, 1, 1]]))
