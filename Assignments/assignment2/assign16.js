 function getExtension(arr) {
    return arr.map(function(ele) {
        const result = ele.split('.')
        if(result.length > 1){
            return result.pop()   //prints the last removed array
        }else{
            return ''
        }
    })
}
console.log(getExtension(["code.html","code.css"])) 
console.log(getExtension(["project1.jpg","project1.pdf","project1.mp3"])) 
console.log(getExtension(["ruby.rb","cplusplus.cpp","python.py","javascript.js"])) 

