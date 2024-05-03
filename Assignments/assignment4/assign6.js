function reverseAndNot(n){
    const value = parseInt(String(n).split('').reverse().join(''))
  const result =  String(value) + parseInt(String(n))
  return result
}
console.log(reverseAndNot(123))
console.log(reverseAndNot(152))
console.log(reverseAndNot(123456789))