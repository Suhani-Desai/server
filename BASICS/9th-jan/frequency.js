function frequency(str){
    const output={}
    for(let i=0;i<str.length;i++){
        if(str[i] in output){     //in operator is used to check whether the output has the character or not
            output[str[i]] += 1  //if it is present then add 1 to it
        }else{
            output[str[i]] = 1    //else create a new property and assign 1 to it
        }
    }
    return output
}
console.log(frequency('ddcccttd'))