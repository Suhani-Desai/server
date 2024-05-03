function makeTitle(str){
    const value = str.split(/[ ,]+/)
    const result = value.map(function(ele){
        return ele.charAt(0).toUpperCase() + ele.slice(1)
    })
    return result.join(' ')
}
console.log(makeTitle("This is a title"))
console.log(makeTitle("Capitalize every word"))
console.log(makeTitle("I like pizza"))
console.log(makeTitle("PIZZA PIZZA PIZZA"))