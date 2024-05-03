function inBox(arr){
    const result = arr.some(function(ele){   
    if(ele.includes("*")){
        return true
    }else{
        return false
    }
})
    return result
}
console.log(inBox(["###", "#*#", "###"]))
console.log(inBox(["####", "#* #", "#  #", "####"]))
console.log(inBox(["*####", "# #", "#  #", "####"]))
console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"]))