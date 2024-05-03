function indexMultiplier(arr) {
    let sum = 0 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i
    }
    return sum;
}
console.log(indexMultiplier([1, 2, 3, 4, 5]))
console.log(indexMultiplier([-3, 0, 8, -6]))
