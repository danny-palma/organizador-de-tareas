const express = require('express');
const path = require('path')
const app = express()

app.set('port', 3000)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html' ))
})

app.listen(app.get('port'), () => {
    console.log(`server en el puerto ${app.get('port')}`)
})