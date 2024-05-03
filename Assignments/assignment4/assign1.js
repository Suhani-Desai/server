function squareDigits(num){
    const result = String(num).split('').map(function(ele){
        const output = parseInt(ele) ** 2
        return output.toString()
    })
    return parseInt(result.join(''))
}
console.log(squareDigits(9119))
console.log(squareDigits(2483))
console.log(squareDigits(3212))

/*
String(num): Converts the input number num to a string. This allows us to use the split method on it.

.split(''): Splits the string into an array of individual digits. For example,['9', '1', '1', '9']

.map(function(digit) { ... }): Applies a function to each element of the array. In this case, the function 
takes each digit as a string, converts it to a number (parseInt(digit)), squares it (** 2), and then converts 
the squared number back to a string using toString().

result.join(''): Joins the array of squared digits back into a single string. For example, if the squared 
digits are [81, 1, 1, 81], this will result in the string '811181'.

parseInt(...): Converts the final string back to a number.
*/

// function squareDigits(num){
//     return parseInt(String(num).split('').map(digit => digit ** 2).join(''))
// }
// console.log(squareDigits(9119))
// console.log(squareDigits(2483))
// console.log(squareDigits(3212))


//using reduce method
// function squareDigits(num) {
//     const result = String(num).split('')
//         .reduce(function (accumulator, cv) {
//             const output = parseInt(cv) ** 2
//             return accumulator + output
//         }, '')

//     return parseInt(result)
// }
// console.log(squareDigits(9119))

