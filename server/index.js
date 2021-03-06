//Require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

//Controllers
const controller = require('./controller');

//Deconstruct variables
const { CONNECTION_STRING } = process.env;

//Middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Database connection
massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log('Database connected successfully');
    }).catch((err) => {
        console.log('Database failed to connect:', err);
    });

//Enpoints
app.get('/api/shelf', controller.getBins);

//Get server listening on a port
app.listen(8000, () => {
    console.log('Server is running on localhost:8000')
});