//frontend - es6 module loader
//backend - common js module loader i.e., require() 
//npm init -y
const express = require('express')  //npm install express
const mongoose = require('mongoose')  //npm install mongoose
const cors = require('cors')
const { checkSchema, validationResult } = require('express-validator')  //npm install express-validator
const app = express()
const port = 3068

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/exp-app-dec23')
.then(() => {
    console.log('connected to db')
})
.catch((err) => {
    console.log('error connecting to db', err)
})


const { Schema, model } = mongoose  //object destructuring
const categorySchema = new Schema({
    name : {
        type: String,
        require: true   //only if the name is present it saves the record or else throws error
    }
}, {timestamps : true})  //shows when the record is created and updated
const Category = model('Category', categorySchema)

//validation schema
const categoryValidationSchema = {
    name : {
        //Location of the field, can be one or more of body, query, params, cookies, or headers
        in : ['body'],
        //Indicates that this field is required
        exists : {
            errorMessage :'Name is rquired' //name field is required
        },
        //Checks that the string is not empty
        notEmpty : {
            errorMessage : 'Name cannot be empty'
        },
         trim : true, //it removes white spaces 
         custom: {
            //Additional validation 
             options: function(value){
                 return Category.findOne({name : value})
                 .then((obj) => {
                     if(!obj){
                         return true
                     }
                     throw new Error('category name already taken')
                 })
            }
         }
     }
}

const idValidationSchema = {
    id : {
        in : ['params'],
        isMongoId : {
            errorMessage : 'should be a valid Mongo Id'
        }
    }
}

//request handler
//GET 'all-categories'
app.get('/all-categories', (req, res) => {
    Category.find()  //return all the documents present inside the collection
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
    res.json(err)
})
})

//route level middleware
app.post('/create-category',checkSchema(categoryValidationSchema), (req, res) => {
    const errors = validationResult(req)  //if there is any validation error then validationResult()mtd gets called, extracting the error from req object
    if(!errors.isEmpty()){  //not empty then error message
        return res.status(400).json({errors : errors.array()})
    } //else it executes the below code

    const body = req.body //{name:'food'} //whatever is sent from the frontend is inside the body property which is assigned to body variable
    Category.create(body)
    const categoryObj = new Category(body)
    //categoryObj.name = body.name //every category has a name property then we assign body objects name property 
    categoryObj.save()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.get('/single-category/:id', (req, res) => {
    const id = req.params.id  //extract what the id is
    Category.findById(id)
    //if we want to find record by its name then there is method called findOne(), so it basically helps us to find the record by its name and the syntax is - Category.findOne({name : name}) first name will be the field name and the second name will be the input provided by the user, and wherever there is id, it should be replaced with name
    .then((category) =>{
        if(!category){  //if the category is not found 
            return res.status(404).json({})
        }
        res.json(category)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.put('/update-category/:id',checkSchema(categoryValidationSchema), (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body, {new : true})
    //findByIdAndUpdate() is a mtd used to update the record, it has 3 parameters 1st is the document's id, 2nd is the new data and 3rd is to return the updated data/document 
    .then((category) => {
        if(!category){
            return res.status(404).json({})
        }
        res.json(category)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.delete('/remove-category/:id',checkSchema(idValidationSchema), (req, res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then((category) =>
    {
        if(!category){
            return res.status(404).json({})
        }
        res.json(category)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error : 'Internal server error'})
    })
})





const expenseSchema = new Schema({  //new Schema
    expenseDate :Date,
    amount : Number,
    description :  String,   
},{timestamps : true})

const Expense = model('Expense', expenseSchema)  //new Model

const expenseValidationSchema = {
    expenseDate: {
        in : ['body'],
        exists:{
            errorMessage: 'expense date is required'
        },
        notEmpty: {
            errorMessage: 'expense date cannot be empty'
        },
        isDate: {
            errorMessage: 'expense date is not valid'//yyyy-mm-dd
        },
        //custom validation
        custom: {
            options: function(value){ //value is the expenseDate provided by the user 
                if(new Date(value) > new Date()){  //checking whether the expenseDate is greater than today's date
                    throw new Error('expense date cannot be greater than today')
                }
                return true
            }
        }
    },
    amount : {
        in: ['body'],
        exists: { //amount field should be there
            errorMessage: 'amount is required'
        },
        notEmpty: {
            errorMessage: 'amount cannot be empty'
        },
        isInt: {
            errorMessage: 'amount should be min 1'
        },
        //custom validation
        custom:{
            options: function(value){  
                if(value <= 0){
                    throw new Error('amount should be greater than 0')
                }
                return true
            }
        }
    }
}

app.get('/all-expenses', (req, res) => {
    Expense.find()
    .then((expenses) => {
        res.json(expenses)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.post('/create-expense', checkSchema(expenseValidationSchema), (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const body = req.body
    const expenseObj = new Expense(body)
    expenseObj.save()
    .then((exp) => {
        res.json(exp)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.put('/update-expenses', checkSchema(expenseValidationSchema), (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    const id = req.params.id
    const body = req.body
    Expense.findByIdAndUpdate(id, body, {new : true})
    .then((expense) => {
        if(!expense){
            return res.status(404).json({})
        }
        res.json(expense)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.listen(port, () => {
    console.log('server running on port', port)
})