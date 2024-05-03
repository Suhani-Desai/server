const values = {
    a : 10,
    b : 20, 
    add : function(){
        return this.a+this.b
    },
    multiply : function(){
        return this.a*this.b
    },
    sub : function(){
        return this.a - this.b
    },
    divide : function(){
        return this.a/this.b
    }
}
console.log(values.add())
console.log(values.multiply())
console.log(values.sub())
console.log(values.divide())