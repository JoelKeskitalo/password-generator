const dotenv = require('dotenv')
dotenv.config()
const express = require('express')

const passwordRoutes = require('./routes/passwordRoutes') 

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())


app.use('/api/passwords', passwordRoutes) 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

// shallow commit for testing
