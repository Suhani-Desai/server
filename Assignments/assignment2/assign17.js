function googlify(n){
    if(n>=0){
        result="g"+"o".repeat(n)+"gle"
    }else{
        return "Invalid input"
    }
    return result
}
console.log(googlify(10))
console.log(googlify(23))
console.log(googlify(2))
console.log(googlify(-2))