function uploadCount(arr, str){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            count++;
        }
    }
    return count;
}
console.log(uploadCount(["sept 21", "sept 22", "oct 15"], "sept"))
console.log(uploadCount(["sept 21", "sept 22", "oct 15"], "oct"))
