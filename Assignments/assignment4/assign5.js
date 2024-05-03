function matchLastItem(arr){
    let result = arr.slice(0, arr.length - 1).join("")
        if(result == arr[arr.length-1]){
            return true
        }else{
            return false
        }
    }
    console.log(matchLastItem(["rhq", "6hi", "g", "rhq6hig"]))
    console.log(matchLastItem([1, 1, 1, "11"]))
    console.log(matchLastItem([8, "thunder", "true", "8thundertrue"]))