function sameCase(str){
    if(str==str.toUpperCase() || str==str.toLowerCase()){
        return true
    }else{
        return false
    }
}
console.log(sameCase("hello"))
console.log(sameCase("HELLO"))
console.log(sameCase("Hello"))
console.log(sameCase("ketcHUp"))