function findBomb(str){
        if(str.includes('bomb')){
            return "Duck!!!"
        }else{
            return "There is no bomb"
        }
        return str
    }
    console.log(findBomb("There is a bomb"))
