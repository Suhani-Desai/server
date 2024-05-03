const User = require('../models/user-model')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')
const usersCltr = {}

usersCltr.register = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const body = req.body 
    try { 
        const salt = await bcryptjs.genSalt() //salt value will be the random set of characters and evevrytime u call the salt value it automatically generates the random set of characters evevrytime
        const hashPassword = await bcryptjs.hash(body.password, salt) 
        //bcrypt hash has contains 2 parameters 1st is the password and 2nd will be the salt value
        const user = new User(body)
        user.password = hashPassword
        await user.save() 
        res.status(201).json(user) 
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
    // User.create(body)
    //     .then((user) => {
    //         res.status(201).json(user)
    //     })
    //     .catch((err) => {
    //         res.status(500).json({ error: 'something went wrong'})
    //     })
}

usersCltr.login = async (req, res) => {
    const errors = validationResult(req)  //checks the validations like whether the format or the entered email is correct or not
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const body = req.body //extract the body
    try { 
        const user = await User.findOne({email: body.email })  //checks if the email is already exists or not
        if(user) {
            const isAuth = await bcryptjs.compare(body.password, user.password) //body.password is coming from the req.body property and user.password is from the record which id found in db
            if(isAuth) {
                const tokenData = {
                    id: user._id,
                    role: user.role 
                }
                const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '7d'})
                return res.json({ token: token })
            }
            return res.status(404).json({ error: 'invalid email / password '})
        }
        res.status(404).json({ error: 'invalid email / password'})
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

usersCltr.account = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        res.json(user)
    } catch(err) {
        res.status(500).json({ error: 'something went wrong'})
    }
}

module.exports = usersCltr 