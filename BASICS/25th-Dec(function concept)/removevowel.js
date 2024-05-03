function removeVowels(str){
    const vowels='aeiou'
    let result=''
    for(let i=0;i<str.length;i++){
        if(!vowels.includes(str[i].toLowerCase())){
            result=result+str[i]
        }
    }
    return result
}
console.log(removeVowels('I have never seen a thin person drinking diet coke'))