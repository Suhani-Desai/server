function toArray(arr){
    const result=[]
    for(const key in arr){
    result.push([key, arr[key]])
    }
    return result
}
console.log(toArray({a : 1, b : 2}))
console.log(toArray({shrimps : 15, tots : 12}))
console.log(toArray({}))
