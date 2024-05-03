function isIdentical(str){
    const firstchar=str[0]
    for(let i=0;i<str.length;i++){
    if(firstchar!=str[i]){
        return false
    }
}
return true
}
//Placing return true outside the loop ensures that the loop has
 //completed its iteration and found no non-identical characters before 
 //concluding that all characters are indeed identical.
console.log(isIdentical("aaaaaa"))
console.log(isIdentical("aabaaa"))
console.log(isIdentical("ccccca"))
console.log(isIdentical("kk"))


