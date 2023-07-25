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
    user: process.env.USER_DB,   
    password: process.env.PASSWORD,
    database: process.env.DB

}
//console.log(process.env.HOST +' : '+ process.env.USER +' : '+ process.env.PASSWORD);

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//routes-------------------------
app.get('/', (req, res) => {

    res.send('<center><h1>Bienvenido a Cadofi</h1></center>');
})

app.use('/', routes)

// server running----------------------------
app.listen(app.get('port'), () => {

    console.log('Servidor a la escucha en el puerto:', app.get('port'))
})
