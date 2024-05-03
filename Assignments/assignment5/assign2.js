function missingNum(arr){
    arr.sort(function(a, b){
        return a - b
    })
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]-arr[i]!==1){
            return arr[i]+1
        }
    }
    return null
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))