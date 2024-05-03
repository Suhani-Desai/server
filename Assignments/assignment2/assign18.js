function repeat(str,n){
    let value=''
        result=str.split('').map(char => char.repeat(n)).join('')
        
    
        return result
    }
console.log(repeat("mice", 5))
console.log(repeat("hello", 3))
console.log(repeat("stop", 1))
