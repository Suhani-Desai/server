function lettersOnly(str){
    let result = ''
        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i)
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                result += char
            }
        }
        return result;
    }
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"))
console.log(lettersOnly("^,]&4B|@56a![0{2m>b1&4i4"))
console.log(lettersOnly("^U765983p"))

