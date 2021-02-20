const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()

// middlewares
app.use(cors())
// app.use(express.json())

// ROUTES
app.get('/api/employees', (req, res) => {
    const baseUrl = 'https://randomuser.me/api/?results=2'

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => console.error(err))

})

app.listen(5000, () => {
    console.log('server has started on port 5000')
})