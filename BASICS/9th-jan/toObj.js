function toObject(arr){
    const result=[]   //array of objects so empty array
    arr.forEach(function(ele){
        const obj={}          //and empty object to store the key-value pair.
        obj[ele]=ele.charCodeAt()  //obj[ele] creates the new property and assigns the acscii value to it.
        result.push(obj)
        //result.push({[ele]:ele.chatCodeAt()})   //another method
    })
    return result
}
console.log(toObject(["a","b","c"]))
console.log(toObject(["z"]))
console.log(toObject([]))