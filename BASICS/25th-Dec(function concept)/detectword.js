function detectword(str){
        let result=""
        for(let i=0;i<str.length;i++){
            if(str[i]==str[i].toLowerCase()){
                result = result+str[i]
            }
        }
        return result
}
console.log(detectword("UGcDYaKLVt"))
console.log(detectword("HDdFoFCRCFFg"))
console.log(detectword("chsksm"))
