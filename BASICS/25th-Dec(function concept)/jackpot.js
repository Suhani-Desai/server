function testJackpot(arr){
    const value=arr[0]
    for(let i=1;i<arr.length;i++){
        if(value==arr[i]){
            continue    //used to go to beginning of the loop
        }else{
            return false
        }
    }
    return true
}
console.log(testJackpot(["@","@","@","@"]))
console.log(testJackpot(["abc","abc","abc","abc"]))
console.log(testJackpot(["SS","SS","SS","SS"]))
console.log(testJackpot(["&&","&","&&&","&&&&"]))
console.log(testJackpot(["SS","SS","SS","Ss"]))
