function helloWorld(num){
    if(num % 3 == 0 && num % 5 == 0){
        return "Hello World"
    }
    else if(num % 3 == 0){
        return "Hello"
    }
    else if(num % 5 == 0){
        return "World"
    }
}
console.log(helloWorld(3))
console.log(helloWorld(5))
console.log(helloWorld(15))
