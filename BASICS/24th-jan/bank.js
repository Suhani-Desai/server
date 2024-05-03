/*
create an object to specify data of customers in a bank. The data to be stored is: Account number, Name, Balance.
Assume a maximum of 200 customers in the bank
create a method called transaction which takes 2 argumets and code(1 for deposit, 0 for withdraw). Create a method 
to display the current balance for the customer.
If the withdraw amount is more than the balance then display "The balance is insufficientfor the specified
 withdrawal
*/
const customer = {
    accNum : 'SBI123',
    name : 'suhani',
    balance : 1000,
    currentBalance : function(){
        return `The balance is INR ${this.balance} as an ${new Date()}`
    },
    transaction : function(amount, code){
        if(code == 1){
            this.balance += amount
            return "Deposite Successful"
        }else if(code == 0){
            if(amount > this.balance){
                return "Insufficient balance"
            }else{
                this.balance -= amount
                return "Withdrawal Successful"
            }
        }else{
            return "Invalid code"
        }
    }
}
console.log(customer.currentBalance())
console.log(customer.transaction(1000, 1))
console.log(customer.currentBalance())
console.log(customer.transaction(3000, 0))
console.log(customer.transaction(300, 0))
console.log(customer.currentBalance())