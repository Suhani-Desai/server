function getCase(str){
    if(str==str.toUpperCase()){
        return "Upper"
    }else if(str==str.toLowerCase()){
        return "Lower"
    }else{
        return "Mixed"
    }
}
console.log(getCase("whisper....."))
console.log(getCase("SHOUT!"))
console.log(getCase("Indoor Voice"))
