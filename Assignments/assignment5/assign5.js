function equal(a, b, c){
    if(a == b && b == c){
        return 3
    }
    if(a == b || a == c || b == c ){
        return 2
    }else{
        return 0
    }
}
console.log(equal(3, 4, 3))
console.log(equal(1, 1, 1))
console.log(equal(3, 4, 1))
