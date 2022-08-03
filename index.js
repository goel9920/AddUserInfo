const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes/api').route)

app.listen(2679, () => console.log('Server started at http://localhost:2679'))