function sumTwoSmallestNums(n){
    const negative = n.filter(function(ele){
        return ele >= 0
    })
    const sort = negative.sort(function(a, b){
        return a-b
    })
    const sum = sort.slice(0,2).reduce(function(acc, cv){
        return acc+cv
    }, 0)
    return sum
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453 ]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))