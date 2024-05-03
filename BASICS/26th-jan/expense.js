function Expense(name, amount){
    this.name = name
    this.amount = amount
    this.countExpense = function(){
        return `Total Expenses - ${this.amount.length}`
    }
    this.total = function(){
        const result = this.amount.reduce((acc, cv) => {
            return acc + cv
        }, 0)
        return `Total Expenses Amount ${result}`
    }
}
const c1 = new Expense('Aditya', [125, 250, 350, 100])
console.log(c1.countExpense())
console.log(c1.total())

const c2 = new Expense('Suhani', [100, 200, 300])
console.log(c2.countExpense())
console.log(c2.total())