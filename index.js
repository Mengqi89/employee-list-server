const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()

// middlewares
app.use(cors())

// ROUTES
app.get('/api/employees', (req, res) => {
    const baseUrl = `https://randomuser.me/api/?results=500`

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => console.log('ERROR', err.error))

})

app.listen(5000, () => {
    console.log('server has started on port 5000')
})