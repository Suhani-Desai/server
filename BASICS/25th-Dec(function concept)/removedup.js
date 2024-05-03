function removeDups(arr){
    const result = []
    //using for loop
    // for(let i = 0;i < arr.length; i++)
    // {
    //     if(!result.includes(arr[i])){
    //         result.push(arr[i])
    //     }
    // }

    
    //using forEach loop
        arr.forEach(function(ele){
            if(!result.includes(ele)){
                result.push(ele)
            }
        })
    return result
}
console.log(removeDups([1,0,1,0]))
 console.log(removeDups(["The","big","cat"]))
 console.log(removeDups(["John","Taylor","John"]))