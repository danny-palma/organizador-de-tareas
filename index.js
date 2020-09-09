const express = require('express');
const path = require('path')
const app = express()

app.set('port', 3000)
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile('index')
})

app.listen(app.get('port'), () => {
    console.log(`server en el puerto ${app.get('port')}`)
})