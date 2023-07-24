const express = require('express')
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 3000)


// middlewares

const dbOptions = {

    host: 'localhost',
    port: '3306',
    user: 'root',   
    password: 'Joga3014_',
    database: 'cadofi'

}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//routes-------------------------
app.get('/', (req, res) => {

    res.send('Pagina principal');

})


app.use('/api', routes)

// server running----------------------------
app.listen(app.get('port'), () => {

    console.log('Server running on port', app.get('port'))

})
