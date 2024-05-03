function match(s1, s2){
    let result=''
    if(typeof s1=='string' && typeof s2=='string'){
        return s1.toUpperCase() == s2.toUpperCase()    //the toUpperCase() method is used to convert both input 
                                                      // strings to lowercase before comparing them. This ensures 
                                                      //that the comparison is case-insensitive.
    }else{
        console.log("false")
    }
    return result
}
console.log(match("hello", "hELLo"))
console.log(match("motive", "emotive")) 
console.log(match("venom", "VENOM"))
console.log(match("mask", "mAskinG"))

