//In the global scope the value of this keyword will be an empty object 
console.log(this)  //the output will be {}

//es5 function
function greet(){
    console.log(this)  //the output will be golbal object
}
greet()

//object
const person = {
    firstName :'Suhani',
    lastNmae : 'Desai',
    fullName : function(){
        console.log(this)   //current object
    },
   details : () => {
//in arrow function it doesnot have the value of this keyword of its own, 
//it will refer the value of this eyword from the outer scope and in this case the outer scope is global scope
//so the output will be an empty object {}
    console.log(this)    //{}
   }
}
person.fullName()
person.details()

function greet2(){
    console.log(this)  //global object
    const obj = {
    firstName :'Suhani',
    lastNmae : 'Desai',
    add : () => {
        console.log(this)   //In this we are using arrow arrow function and it doesnot have the value 
        //of "this" of its own so it is taking from the value outer scope. In this the outer scope is function 
        //scope and the value will be global object for "this" so the output will also be the global object  
        }
    }
    obj.add()
}
greet2()


/*The value of "this" keyword differs as we write the code
1. In the global scope the value of "this" keyword will be an empty object.
2. In es5 function the output will be golbal object.
3. In object if we use es5 function, the value will be current object.
4. In object if we use es6 function, the value will be the outer scope's value.
*/