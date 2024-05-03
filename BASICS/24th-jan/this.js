const person = {
    firstName : 'steve',
    lastName : 'Jobs',
    fullName : function(){
        //this keyword is used to refer the current object
        return this.firstName + ' ' + this.lastName
    }
}
console.log(person.fullName())


const developer = {
    name : 'Steve',
    proffession : 'Software Engineer',
    skills : ['js', 'react', 'node', 'py'],
    details : function(){
        this.skills.forEach((ele) => {
            console.log(`${this.name} knows ${ele}`)
        })
    }
}
developer.details()