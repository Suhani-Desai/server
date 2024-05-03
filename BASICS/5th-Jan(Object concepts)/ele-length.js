function objLen(arr){
    const result = {}
    arr.forEach(function(ele){   //to access every element 
        result[ele]=ele.length   //to find the number of characters the element has
    })
    return result
}
console.log(objLen(['react','node','express']))