const User = require('../models/user-model') //to import the model folder
const userRegisterValidationSchema = {
    username: {
        exists: {
            errorMessage: 'username is required'            
        },
        notEmpty: {
            errorMessage: 'username cannot be empty'
        },
        trim: true 
    },
    email: {
        exists: {
            errorMessage: 'email is required'            
        },
        notEmpty: {
            errorMessage: 'email cannot be empty'
        },
        isEmail: {
            errorMessage: 'email should be a valid format'
        }, 
        custom: {  //email should be unique
            options: async function(value){
                const user = await User.findOne({ email: value })  //[findOne] -> finding the record based on the email/any value  [value] -> will be the input og what we are getting from the user 
                if(user) {  //checks whether the same email is entered or not
                    throw new Error('email already taken')  //if same then throw the error, else true
                } else {
                    return true 
                }
            }
        },
        trim: true,
        normalizeEmail: true  //if the user enters the email in caps then it automatically converts it to lovercase
    },
    password: {
        exists: {
            errorMessage: 'password is required'            
        },
        notEmpty: {
            errorMessage: 'password cannot be empty'
        },
        isLength: {
            options: {min: 8, max: 128},
            errorMessage: 'password should be between 8 - 128 characters'
        },
        trim: true 
    },
    role: {
        exists: {
            errorMessage: 'role is required'            
        },
        notEmpty: {
            errorMessage: 'role cannot be empty'
        },
        isIn: {
            options: [['candidate', 'recruiter']],
            errorMessage: 'role should either be a candidate or recruiter'
        }, 
        trim: true 
        
    }
}

module.exports = userRegisterValidationSchema