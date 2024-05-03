function rev(number){
    const value = String(number).split('').reverse().join('')
    const result = parseInt(value)
    return result 
}
console.log(rev(5121))
console.log(rev(69))
console.log(rev(122157))