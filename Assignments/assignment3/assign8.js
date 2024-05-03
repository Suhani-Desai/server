function keysAndValues(obj){
    const keys=[], values=[]
    for(const key in obj){
        keys.push(key)
        values.push(obj[key])
    }
    return [keys, values]
}
console.log(keysAndValues({a : 1, b : 2, c : 3}))
console.log(keysAndValues({a : "Apple", b : "Microsoft", c : "Google"}))
console.log(keysAndValues({key1 : true, key2 : false, key3 : undefined}))
