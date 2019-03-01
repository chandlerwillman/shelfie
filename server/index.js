//Require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

//Controllers
const controller = require('./controller');

//Deconstruct variables
const {
    PORT,
    CONNECTION_STRING,
} = process.env;

//Middleware
const app = express();
app.use(bodyParser.json());

//Database connection
massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
}).catch(() => {
    console.log('failed')
});

//Get server listening on a port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});