function capMe(arr){
    const result=[]
    arr.forEach(function(ele){
        const name = ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()
        result.push(name)
    })
    return result
}
console.log(capMe(["mavis","senida","letty"]))
console.log(capMe(["samuel","MABELLE","letitia","meridith"]))
console.log(capMe(["Slyvia","Kristal","Sharilyn","Calista"]))
