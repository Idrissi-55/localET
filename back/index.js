const dotenv = require('dotenv').config();

const express = require('express');

const session = require('express-session');

const router = require('./app/router');

const cors = require ('cors');

const app = express();

const path = require('path')


//Allow us to process the information from POST
app.use(express.urlencoded({extended: true}));

//We will put connected users in a session
app.use( session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: true, // must be in https
        maxAge: 7200000, // in milliseconds --> 2h
        httpOnly: true
    }
}));

const port = process.env.PORT || 1234;

// Server can receive data in JSON format
app.use(express.json());

//Keep the following lines code in this order!
app.use(cors());

app.use(express.static(path.join(__dirname,'../front/dist')));   

app.use('/api', router);

app.listen(port, () => console.log(`Server running`));
