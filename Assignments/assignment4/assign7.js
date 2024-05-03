function multiplyNums(str){
    const value = str.split(',').map(Number)
    if(value.length > 0){
        const product = value.reduce(function(acc,cv){
           return acc * cv
        })
        return product
    }else{
        return 0
    }
}
console.log(multiplyNums("2, 3"))
console.log(multiplyNums("1, 2, 3, 4"))
console.log(multiplyNums("54, 75, 453, 0"))
console.log(multiplyNums("10, -2"))