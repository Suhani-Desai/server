function doubleChar(str){
    let result=""
    for(let i=0;i<str.length;i++){
        result=result+str[i].repeat(2)
    }
    return result
}
console.log(doubleChar("Hello"))
console.log(doubleChar("Suhani"))
console.log(doubleChar("Desai"))
