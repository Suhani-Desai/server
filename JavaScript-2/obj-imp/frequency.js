//Program to find the occurance of the characters in the given string   

function frequency(str){
    const result = {}  //set the result value empty to keep count on the frequency(number of times) of characters and push it to the result as object

    for(const char of str){   //iterate every character in the string 

        if(result.hasOwnProperty(char)){  //Inside the loop, it checks if the result object already has a property with the name of the current character (char) using result.hasOwnProperty(char).hasOwnProperty() is a method in JavaScript that is used to check if an object has a property with a specified name.
            
            result[char] += 1   //if result variable already has the same character then increment the number
        }else{
            result[char] = 1  //else keep the same count
        }
    }
    return result
}
console.log(frequency('dctdcd'))
console.log(frequency('davhhfydsas'))
