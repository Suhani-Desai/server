const str='dctacademy'
const vowels='aeiou'
let count=0
let result=''
for(let i=0;i<str.length;i++){
    if(!vowels.includes(str[i])){
        result=result+str[i]
    }
}
console.log(result)