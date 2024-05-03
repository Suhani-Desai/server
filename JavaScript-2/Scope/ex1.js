const str1 = 'Outside Function'  //Global Scope

//Function Scope
function greet(){  
    const str2 = 'Inside Function'
    console.log(str1)  //Outside Function
    console.log(str2)  //Inside Function
}
greet()
console.log(str1)  //Outside Function
//console.log(str2)  //Reference Error, because outside the function you cannot access the str2 variable the lifetime of the variable inside the function is within the function and cannot be accessed it outside