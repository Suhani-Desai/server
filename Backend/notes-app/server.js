//express is only used to handle request and response and nothing to do with database
// mongoose is used to interact with mongodb database only
const express = require('express')  //npm install express
const mongoose = require('mongoose')  //npm install mongoose
const app = express()
const port = 3067

//es6 object destructuring - there are large set of properties and methods in mongoose bt we don't want everything, so we are extracting these properties independtly and using it    
const {Schema, model, connect} = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/notes-app-dec23')  ////localhost:port number    
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('cannot conect to db', err)
    })

    //enable or allow express to parse incoming json data
    app.use(express.json())

//whenever we want to interact with the database we cannot directly interact instead we first create schema and model and then we can interact with database. And using schema we create a model and with the model we can interact with the database.
//The purpose of the schema is to mention the fields of your documents(rows of objects) of your database 
//create a schema -  identifying the fields for the document
const noteSchema = new Schema({ //new constructor function
    body : String   //the field : its data type
})

//cretae a model - constructor function 
const Note = model('Note', noteSchema) //here 'Note' is the name of the model and by default it will directly talk to the collection called notes(intelligent defaults)

const notes = [
    {id : 1, title : 'This is my first note'},
    {id : 2, title : 'This is my second note'},
    {id : 3, title : 'This is my third note'}
]

app.listen(3067, () => {
    console.log('Server running on port', port)
})

//request-handler - list all notes
app.get('/list-notes', (req, res) => {
    Note.find()  //it will return all the documents in the collection
    .then((notes) => {
        res.json(notes)  //send the data to frontend
    })
    .catch((err) => {
        res.json(err)
    })
})

//request- handler - creating a note
app.post('/create-notes', (req, res) => {
    const body = req.body  //body is the incoming data from the frontend
    const note = new Note(body) //whatevevr the objet is we will pass it as an argument to Note constructor function
    note.save()  //in the notes collection it will help to add the data same as push()
    .then((obj) => {
        res.json(obj)
    })
    .catch((err) => {
        res.json(err)
    })
})

//request handler - deleting a note
app.delete('/remove-note/:id', (req, res) => {
    const id= req.params.id  // to read the mentioned id
    const index = notes.findIndex(function(ele){   //findIndex returns the first elemet's index that satisfies the given condition
        return ele.id == id
    })
    //splice method is used because if user wnts to delete some notes then splice method is used, it removes an element at the given index
    if(index >= 0){  //if the index is greater than zero then splice method gets called and removes one element
        const result = notes.splice(index, 1)
        res.json(result[0])
    }else{
        res.status(404).json({ notice : 'record not found'})  
    }
})

//splice method is also used to add the elemets in the middle of the elements.
// in splice method 0 represents adding one element in the array and 1 represents removing 1 element in the array.
//numbers = [10, 20, 30, 40, 50]
// [ 10, 20, 30, 40, 50 ]
// > numbers.splice(1,1) to remove the element
// [ 20 ]
// > numbers.push(60)  to add the element at the last
// 5
// > numbers.unshift(1) to add the elemet in the beginning
// 6
// > numbers
// [ 1, 10, 30, 40, 50, 60 ]
// > numbers.splice(2,0,20)  to add the elemet at a given index
// []
// > numbers
// [1, 10, 20, 30,40, 50, 60]
