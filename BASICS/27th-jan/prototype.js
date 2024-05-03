/*
1. Every object will have a property named prototype.
2. Every constructor function will have prototype object.
3. Object's prototype is connected to its respective constructor function's prototype.
4. prototypes are useed to reduce the memory.
5. In the contructor function if the methods are not present then it checks those methods in its constructor
   prototype(just like scopes).
 */

   function Customer(name, balance, accNo){
    this.bankName = 'SBI'
    this.name = name
    this.balance = balance
    this.accNo = accNo
   }
   Customer.prototype.checkBalance = function(){   //constructor funtion prototype
    return `Balance is INR ${this.balance}`
   }
   Customer.prototype.deposite = function(amount){    //constructor funtion prototype
    this.balance += amount
    return `Deposite of ${amount} is successful`
   }
   const c1 = new Customer('Steve', 1000, 'SBI123')
   console.log(c1)
   console.log(c1.checkBalance())

   const c2 = new Customer('Suhani', 9000, 'SBI1234')
   console.log(c2)
   console.log(c2.deposite(1000))
   console.log(c2.checkBalance())

/*
--> Object prototype is connected to its respective constructor function's prototype. We can also shift 
    properties to prototype which will be common in all the instance. Like in this code this.bankName  is
    common in all, so we can move that that property to prototype
    C */