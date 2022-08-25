const express = require('express')

const app = express()

//Motor de plantillas.
app.set('view engine', 'ejs')

//Public para archivos estáticos.
app.use(express.static('public'))

//Llamada al router.
app.use('/', require('./routes/router'))

const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on http://localhost:3000')
})