//npm init -y
//npm install express
//using express we can set up the server 
const express = require('express')   //npm install express
const cors = require('cors')  //npm install cors
const app = express()

app.use(cors())   //istread of writing setHeader to each and every function we can simply write this. Or else it thows the cors error   

const students = [
    {id : 1, name : 'student 1'},
    {id : 2, name : 'student 2'}
]

const courses = [
    {id : 1, title : 'Full Stack'},
    {id : 2, title : 'React JS'}
]

//syntax for setting up the server is
//app.httpMethod('url', callback)

app.get('/students', (req, res) => {
    res.json(students)    //sends the data directly in json format.
})

app.get('/courses', (req, res) => {
    res.json(courses)
})

app.listen(3066, () => {
    console.log('Server running on port 3066')
})