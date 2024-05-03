const express = require ('express')
const { checkSchema } = require('express-validator')
const configureDB = require('./config/db')
const userRegisterValidationSchema = require('./app/validations/user-register-validations')
const userCltr =  require('./app/controllers/users-cltr')
const app = express()
const port = 3333

configureDB()

app.use(express.json())

app.post('/user/register', checkSchema(userRegisterValidationSchema), userCltr.register)

app.listen(port, () => {
    console.log('server running on the port', port)
})