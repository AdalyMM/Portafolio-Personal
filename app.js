const express = require('express')

const app = express()

//Motor de plantillas.
app.set('view engine', 'ejs')

//Public para archivos estáticos.
app.use(express.static('public'))

//Llamada al router.
app.use('/', require('./routes/router'))

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})