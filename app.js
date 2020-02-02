const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes - middleware
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);


// routes
app.get('/', function (req, res) {
    res.send('We are at home')
  });


// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Connected to the database.'))
.catch(error => console.error(error));


// listening to server
app.listen(3000);