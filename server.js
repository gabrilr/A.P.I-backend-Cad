const express = require('express')
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 3001);


// middlewares

const dbOptions = {

    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER,   
    password: process.env.PASSWORD,
    database: process.env.DB

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
