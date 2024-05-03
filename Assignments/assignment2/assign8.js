function countDs(str){
    let count = 0
    for(let i=0;i<str.length;i++){
        if(str[i].includes("d") || str[i].includes("D")){
            count=count+1
        }
    }
    return count
}
console.log(countDs("My friend Dylem got distracted in school."))
console.log(countDs("Debris was scattered all over the yard."))
console.log(countDs("The rodents hibernated in their den."))
