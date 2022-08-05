const express = require ('express')

const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json()) // In express we have body parser for raw json
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)
// By using this erroHandler you have overided the default express errorHandler

app.listen(port, () => console.log(`Server started on port ${port}`))

// We can make the port the environment variable.