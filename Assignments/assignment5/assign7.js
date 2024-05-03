function hackerSpeak(inputString) {
    const replacements = {'a': '4','e': '3','i': '1','o': '0','s': '5'}
    let result = ''
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i]
        // Check if there is a replacement for the current character in the 'replacements' object
        // If a replacement exists, append the replacement to the result; otherwise, append the original character
        result += replacements[currentChar] || currentChar
    }
    return result;
}
console.log(hackerSpeak("javascript is cool"))
console.log(hackerSpeak("programming is fun"))
console.log(hackerSpeak("become a coder"))