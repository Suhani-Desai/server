function countWord(str){
    const words=str.split(/\s+/)
    return words.length
}
console.log(countWord("Just an example here move around"))
console.log(countWord("This is a test"))
console.log(countWord("What an essay task, right"))


// /\s+/ together means "one or more whitespace characters." 
//When used with the split method, it will split a string into an
// array of substrings based on the occurrence of one or more whitespace characters.