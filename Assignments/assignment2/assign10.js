function toScottishScreaming(str){
    const vowels=/[aeiouAEIOU]/g
    let value=str.replace(vowels,'e')
    return result=value.toUpperCase()
}
console.log(toScottishScreaming("hello world"))
console.log(toScottishScreaming("Mr. Fox was very naughty"))
console.log(toScottishScreaming("Butterflies are beautiful"))
