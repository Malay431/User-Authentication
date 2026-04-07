const mongoose = require('mongoose')

const connectToDatabase = async(URL)=>{
    await mongoose.connect(URL)
}

module.exports = connectToDatabase