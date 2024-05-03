//every function returns true if all the conditions satisfies, even if one constion falis it returns false
const num1 = [10, 20, 30]
const r1 = num1.every(function(ele){
    return ele % 2 == 0
}) 
console.log(r1)