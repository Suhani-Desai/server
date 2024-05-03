function intOrString(check){
    if (typeof check == 'string') {
        return "str"
    } else {
        return "int"
    } 
    }
console.log(intOrString(8))
console.log(intOrString("Hello"))
console.log(intOrString(9843532))

