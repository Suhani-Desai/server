const mongoose = require ('mongoose')
const configureDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/jp-dec23')
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
}

module.exports = configureDB

    //mongoose.connect('mongoose://127.0.0.1:27017/jp-dec23')
    //   .then(() =>{
    //     console.log('connected to db successfully')
    // })
    //.catch((err) => {
    //     console.log(err)
    // })
