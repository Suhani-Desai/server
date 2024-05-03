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

   const a1 = 10
   function f2(){
    function f3(){
        console.log(a1)
    }
    f3()
   }
   f2()
//The value of a1 is can be accessed via lexical scope


function isGreater(arr, n){
    const result = arr.filter(function(ele){
        return ele > n
    })
    return result
}
console.log(isGreater([10, 20, 30, 40], 25))