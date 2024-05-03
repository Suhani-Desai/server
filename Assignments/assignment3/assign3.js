function isSpecialArray(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0 && arr[i] % 2 !== 0) {
            // Even index should contain even number
            return false
        } else if (i % 2 !== 0 && arr[i] % 2 == 0) {
            // Odd index should contain odd number
            return false
        }
    }
    return true
}
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]))
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]))
