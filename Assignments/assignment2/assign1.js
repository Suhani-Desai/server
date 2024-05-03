function repeatString(txt, n) {
    let result=""
    if (typeof txt !== 'string') {
        return "Not a string!!!";
    } else {
        return txt.repeat(n);
    }
    return result
}
console.log(repeatString("Alex", 2))
console.log(repeatString("Matt", 3))
console.log(repeatString(1990, 2))