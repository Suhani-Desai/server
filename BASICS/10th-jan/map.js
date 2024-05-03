//map function transforms the elements og an array
/*
In JavaScript, the map() function is a higher-order function that is used to create a new array
 by applying a provided function to each element of an existing array. It does not modify the
 original array; instead, it returns a new array with the results of applying the provided function
 to each element.
 The returned length of the array will be same as the original aray
*/

//add 3 to all the given elements in an array
const prices= [125, 135, 145, 155]
const r=prices.map(function(ele){
    return ele+3
})
console.log(r)

//uppercase all the elments in the array
const arr=['a', 'b', 'c', 'd']
const r1=arr.map(function(ele){
    return ele.toUpperCase()
})
console.log(r1)

//In the given array add 2 to every even number and 3 to odd number[Interview question]
const arr2=[11, 12, 13, 14]
const r2=arr2.map(function(ele){
    if(ele % 2 == 0){
    return ele + 2
    }else{
        return ele + 3
    }
})
console.log(r2)

//In the given array add 5 to 20
const arr3=[15, 20, 30, 50]
const r3=arr3.map(function(ele){
    if(ele==20){
        return ele+5
    }else{
        return ele     //if we donot write the else part then it only adds 5 to 20 and other elements will be returned as undefined
    }
})
console.log(r3)