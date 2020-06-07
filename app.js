//We require all the pkgs we will need here
const express = require('express');
const mongoose =  require('mongoose');

// connect the server to the mongodb server using mongoose package
require('./config/dbconnection');


//We create our express app
const app = express();

// we will list all the necessary tools and settings that the app must use before responding any client request from the browser
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));


//instrust app to use all routes from the routes folder
app.use('/', require('./routes/index'));

const port = 3200 || process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`)
});