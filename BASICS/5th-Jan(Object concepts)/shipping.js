function freeShipping(obj){
    let total = 0    
    for(const key in obj){  //using for in loop because we don't no the exact element, and there might be n number of elements 
        total = total + obj[key]   //we are adding the values (obj[key]) refers to the values in object
    if(total > 50){     //using if condition because to check whether the total budget is exceeding the given amt or not
        return true
    }else{
        return false
    }
}
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
console.log(freeShipping({ "Flatscreen TV": 399.99 }))