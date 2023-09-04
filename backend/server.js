require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoute')

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(
    ({
        origin: ["http://localhost:30000", "https://mernd-full-auth.vercel.app"],
        credentials: true
    })
))

//Routes
app.use('/api/users', userRoute)


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Home Page')
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => console.log(err))