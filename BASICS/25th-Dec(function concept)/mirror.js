function mirrorArray(arr){
        const result=[]
        arr.forEach(function(ele){
            result.push(ele)
        })
        for(let i=arr.length-2;i>=0;i--){
            result.push(arr[i])
        }
        return result
}
console.log(mirrorArray([0,2,4,6]))
console.log(mirrorArray([1,2,3,4,5]))
console.log(mirrorArray([3,5,6,7,8]))