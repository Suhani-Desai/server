function modifyLast(str,n){
    let result=str[str.length-1]
    return value = str+result.repeat(n-1)
}
console.log(modifyLast("Hello", 3))
console.log(modifyLast("hey", 6))
console.log(modifyLast("excuse me what?", 5))
