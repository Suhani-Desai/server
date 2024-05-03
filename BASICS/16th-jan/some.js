// some function returns true if only one condition is satisfied, and if all the conditions falis ir returns false
const num1 = [19, 21, 30]
const r1 = num1.some(function(ele){
    return ele % 2 == 0
})
console.log(r1)


/*
* SCOPE IS ACCESSIBILITY OR THE LIFE OF THE VARIABLE
1. When the file is created then the global scope alse gets create.
2. In the golobal scope if we write a function then function scope will be created.
3. If some value is not present in the function scope or the current scope it searches that value in the outer scope
   and if it present in the outer scope that value will be taken and this process is called as Lexical Scope */

const city = "Bangalore"
function f1(){
    const playerName = "Jack"
    console.log("Hello " + playerName + " " + city)
}
f1()
//In the above example the variable city is not present in the function, it is in the global scope but still 
//we can access that value from its immediate outer scope that is global scope. 
//So we are accessing the value city via lexical scope.