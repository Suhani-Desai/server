function mean(...num){
    const value = num.reduce(function(acc, cv){
        return acc + cv
    }, 0)
    const output = value / num.length
        return output
}
console.log(mean(4, 2))
console.log(mean(1, 2, 3, 4, 5))
console.log(mean(6, 6, 6))