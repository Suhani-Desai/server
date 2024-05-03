function reverseArr(number){
   const value = String(number).split('').reverse()
        const result = value.map(Number)
        return result
      }
console.log(reverseArr(1485979))
console.log(reverseArr(623478))
console.log(reverseArr(12345))
