function mapping(arr){
        const result = {}    //using {} because the expcted output should be in an object

        arr.forEach(function(ele){   //using forEach loop to access every element

            result[ele] = ele.toUpperCase()   //in this result[ele] refers to the new property which
            // is created using [] and then converting it to a uppercase as a value  
                                               
        })
        return result
}
console.log(mapping(["p", "s"]))
console.log(mapping(["a", "b", "c"]))