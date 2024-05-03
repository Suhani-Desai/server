function keysAndValues(obj){
    // const keys=Object.keys(obj)        //directly using object methods and returning the values
    // const values=Object.values(obj)
    // return [keys, values]

    //another method
    const keys=[], values=[]     //create a variable with an empty array
    for(const key in obj){       //access all the values in the object
        keys.push(key)           //then push the keys in one array 
        values.push(obj[key])    //and values in diffrent array using variable name
    }
    return [keys,values]
}
console.log(keysAndValues({a:1, b:2, c:3}))
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))