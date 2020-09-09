const express = require('express');
const path = require('path')
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`server en el puerto ${app.get('port')}`)
})