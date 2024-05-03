function getBudget(arr){
    let result=0
    arr.forEach(function(ele){     //using forEach loop to access evevry element
        result = result + ele.budget   
    })
    return result
}
console.log(getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))
  console.log(getBudget([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]))