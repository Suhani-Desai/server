function removeDups(arr){
    let result=[]
    for(let i=0; i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(removeDups([1,0,1,0]))
console.log(removeDups(["The","Big","Cat"]))
console.log(removeDups(["John","Tylor","John"]))
