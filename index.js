require('dotenv').config()

const express =require('express')
const cors = require('cors')
const helmet = require('helmet')

const port = process.env.PORT || 4000


const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/api/message', (req, res) => {
    res.json(`Hello, ${req.query.name}! how are you?`)
})

app.use((req, res) =>{
    res.json('the api works')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})