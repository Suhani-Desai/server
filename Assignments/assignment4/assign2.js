function reverseWord(str){
    const value = str.split(' ').reverse().join(' ')
        return value
}
console.log(reverseWord("the sky is blue"))
console.log(reverseWord("hello world!"))
console.log(reverseWord("a good example"))