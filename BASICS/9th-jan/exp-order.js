function expensiveOrder(order, amount){
    const output={}
    for(const key in order){
        if(order[key]>amount){
            output[key]=order[key]    //(order[key refers to the values])
        }
    }
    return output
}
console.log(expensiveOrder({"a":3000,
 "b":200,
  "c":1050}, 1000))
console.log(expensiveOrder({ "Gucci Fur": 24600,
 "Teak Dining Table": 3200,
  "Louis Vutton Bag": 5550,
   "Dolce Gabana Heels": 4000 }, 20000))
console.log(expensiveOrder({ "Deluxe Burger": 35,
 "Icecream Shake": 4,
  "Fries": 5 }, 40))




