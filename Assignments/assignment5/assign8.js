function capMe(str){
    const result = []
    for(let i = 0; i<str.length;i++){
    const output = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
    result.push(output)
    }
    return result
}
console.log(capMe(["mavis", "senaida", "letty"]))
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]))