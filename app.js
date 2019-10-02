const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
require ('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
})


//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('connected to DB')
);


// Listen to the server
app.listen(3000);



fetch('http://localhost:3000/posts')
.then(result => {
    console.log(result);
})