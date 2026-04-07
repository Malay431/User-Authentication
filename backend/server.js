const express = require('express')
const app = express()
const connectToDatabase = require('./lib/db')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8080
connectToDatabase(process.env.MONGO_URL).then(()=>console.log('MongoDB Connected Successfully'))
const userRouter = require('./routes/authRoutes')
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/auth', userRouter)

app.get('/',(req,res)=>{
    res.json({message:'Server is running'})
})

app.listen(PORT, ()=>{
    console.log(`Server started on Port : ${PORT}`)
})