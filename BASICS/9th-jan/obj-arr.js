function objectToArray(obj){
   // return Object.entries(obj)   //method to convert an object into array
   
   //another method
   const result=[]       //create an empty array 
   for(const key in obj){    //access all the elements 
    result.push([key,obj[key]])   //create a new key-value pair using [] and push the elements in result variable
   }
   return result
}
console.log(objectToArray({D : 1, B : 2, C : 3}))
console.log(objectToArray({likes : 2, dislikes : 3, followers : 10}))