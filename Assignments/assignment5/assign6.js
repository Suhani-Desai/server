function specialReverse(str, alp){
    const words = str.split(' ')
    for(let i=0;i<words.length;i++){
        if(words[i].startsWith(alp)){
            words[i] = words[i].split('').reverse().join('')
        }
    }
    return words.join(' ')
}
console.log(specialReverse("word searches are super fun", "s"))
console.log(specialReverse("first man to walk on the moon", "m"))
console.log(specialReverse("peter piper picked pickled peppers", "p"))