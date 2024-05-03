/*
1. Constructor also known as Class.
2. It is a blueprint or template for an object.
3. The constructor should start with capital letter.
4. The purpose is to create a multiple objects with the same set of properties and methods.
5. While invoking 'new' keyword is used, which creates new empty object and that eobject is assigned to 
   'this' keyword
*/

function Customer(name, balance, accNo){
    this.bankName = 'SBI'
    this.name = name
    this.balance = balance
    this.accNo = accNo
    this.checkBalance = function(){
        return `The balance is INR ${this.balance} as on ${new Date()}`
    }
    this.deposite = function(amount){
        this.balance += amount
        return `Deposit of ${amount} is uccessful`
    }
}
const c1 = new Customer('Steve', 1000, 'SBI123')
console.log(c1.checkBalance())
console.log(c1.deposite(500))
console.log(c1.checkBalance())

const c2 = new Customer('Adam', 2000, 'SBI223')
console.log(c2.checkBalance())
console.log(c1.deposite(1000))
console.log(c1.checkBalance())