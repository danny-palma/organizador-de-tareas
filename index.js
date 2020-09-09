const express = require('express');
const app = express()
const port = '3000'
app.set('port', 3000)

app.get('/', (req, res) => {
    res.send(require('public/index.html'))
})

app.listen(app.get('port'), () => {
    console.log(`server en el puerto ${app.get('port')}`)
})