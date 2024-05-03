const prices=[10, 20, 30, 40]
const result=prices.reduce(function(acc, cv){
    acc = acc + cv
    return acc
}, 0)
console.log(result)
/*
acc --> accumulator
cv --> current value
rv --> return value
if we write the initial value then accumulator will take the initial value as its value. Current value will be
the first element in the array, then adds both the values (i.e cv and acc) and returns it. Then the returned 
value will be the accumulator in the next iteration.
*/

//sum of all the even numbers
const arr1 = [10, 11, 20, 21, 30]
const r1 = arr1.reduce(function(acc, cv){
    if(cv% 2 == 0){
        return acc + cv
    }else{
        return acc
    }
}, 0)
console.log(r1)

//add all the prices
const arr2 = [
    {name:'marker', price:10},
    {name:'scale', price:5},
    {name:'board', price:150}]
const r2 = arr2.reduce(function(acc, cv){
    return acc + cv.price
}, 0)
console.log(r2)

//add the prices according to their quantity
const arr3 = [
    {name:'marker', price:10, quantity:3},
    {name:'scale', price:5, quantity:3},
    {name:'board', price:150, quantity:2}]
const r3 = arr3.reduce(function(acc, cv){
    return acc + cv.price * cv.quantity
}, 0)
console.log(r3)

//Return all even numbers
const arr4 = [10, 11, 12, 13, 14]
const r4 = arr4.reduce(function(acc, cv){
    if(cv % 2 == 0) {
        acc.push(cv)
    }
        return acc  //always return the accumulator
}, [])
console.log(r4)

const number = [10, 20, 30, 40]
const initial = 0
const res = number.reduce(function(acc, cv){
    acc += cv
    return acc
}, initial)
console.log(res)