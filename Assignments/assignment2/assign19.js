function checkPalindrome(str){
    return str === str.split('').reverse().join('')
}
console.log(checkPalindrome("mom"))
console.log(checkPalindrome("scare"))
console.log(checkPalindrome("reviver"))
console.log(checkPalindrome("stressed"))
