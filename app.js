const express = require('express')
const connectDB = require('./config/db')
var cors = require('cors')

//routes
const users = require('./routes/api/Users')

const app = express()

// connect to database
connectDB()

//cors
app.use(cors({origin: true, credentials: true}))


//middleware
app.use(express.json({extended: false}))

app.get('/', (req,res)=> res.send('Hello world!'))

//use routes
app.use('/api/users', users)

const port = process.env.PORT || 4000

app.listen(port, ()=> console.log('server running on port 4000'))

