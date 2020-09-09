const express = require('express');
const app = express()
const port = '3000'

app.get('/', (req, res) => {
    res.end( app.use(express.static('public')))
})

app.listen(port, () => {
    console.log(`server en el puerto ${port}`)
})