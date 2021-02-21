require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const { NODE_ENV, PORT } = require('./config')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()

// middlewares
const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption))
app.use(cors())
app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: 'server error' }
    } else {
        response = { error }
    }
    res.status(500).json(response)
})

// ROUTES
app.get('/api/employees', (req, res) => {
    const baseUrl = `https://randomuser.me/api/?results=500`

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(error => console.error(error))

})

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`)
})

module.exports = app