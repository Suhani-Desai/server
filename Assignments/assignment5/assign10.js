function counterpartCharCode(char) {
    const charCode = char.charCodeAt(0);
    if (char == char.toUpperCase()) {
        // The character is uppercase, return the char code of its lowercase counterpart
        return char.toLowerCase().charCodeAt(0);
    } else if (char == char.toLowerCase()) {
        // The character is lowercase, return the char code of its uppercase counterpart
        return char.toUpperCase().charCodeAt(0);
    }
}
console.log(counterpartCharCode("A"))
console.log(counterpartCharCode("a"))