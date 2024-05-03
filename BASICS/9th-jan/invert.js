function invert(obj){
    const result={}
    for(const key in obj){
        result[obj[key]]=key  //replace the keys to value and values to keys
    }                         //the outer square brackets are ussed to create a new property
        return result
}
console.log(invert({"z":"q", "W":"f"}))
console.log(invert({"zebra":"koala", "horse":"camel"}))
