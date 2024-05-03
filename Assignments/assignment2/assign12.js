function forbiddenLetters(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            return false
        }
    }
    return true
}
console.log(forbiddenLetters("r",["rock","paper","scissor"]))
console.log(forbiddenLetters("a",["spoon","fork","knife"]))
console.log(forbiddenLetters("m",[]))


