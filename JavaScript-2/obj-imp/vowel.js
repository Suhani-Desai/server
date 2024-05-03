//Program to find the occurance of ach of the vowel in the given string

function vowelOccurance(str){
    const result = { a:0, e:0, i:0, o:0, u:0}  //set the vowels to 0
    str = str.toLowerCase()  //make the string in lowercase
    for(const char of str){  //iterate over every character
        if(result.hasOwnProperty(char)){  //if the character is vowel then increment that character's value by 1
            result[char] = result[char]+1
        }
    }
    return result
}
console.log(vowelOccurance('javascript'))