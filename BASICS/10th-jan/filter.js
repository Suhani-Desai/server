//filter method returns all the output if the condition is true

//find all the names starts with 'a'
const names = ['adi', 'ishan', 'pranav', 'bhargav', 'amaresh', 'aditi']
const r1 = names.filter(function(ele){
    return ele[0] == 'a'    //or  return ele.charAt(0)  or  return ele.startsWith('a') 
})
console.log(r1)

//print all the prices which are greater than 140
const prices=[165,125,135,145,155]
const r2 = prices.filter(function(ele){
    return ele>140
}) 
console.log(r2)

//find all the even numbers from the array
const arr3=[11,12,13,14,15]
const r3=arr3.filter(function(ele){
    return ele%2==0
})
console.log(r3)

//find all the string from the array
const arr4 = ['one', 2, 'three', 4, '5', 6]
const r4 = arr4.filter(function(ele){
    return typeof ele == 'string'
})  
console.log(r4)

//find all the truthy values
const arr5=[false, true, 0, 1, undefined, null, [], {}, 'dct', '']
const r5 = arr5.filter(function(ele){
    return Boolean(ele)
})
console.log(r5)