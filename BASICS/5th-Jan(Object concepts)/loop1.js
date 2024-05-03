const tech= {
    m : 'mongo db',
    e : 'express js',
    r : 'react js',
    n : 'node js'
}
for(const key in tech){
    console.log(`${key} stands for ${tech[key]}`)  // using es6 template literals.
}