const express = require('express');
// const dbConnect = require('./src/configs/connectDB');
const App = express();
const dotenv = require('dotenv').config();
// dbConnect()

App.use('/', require('./src/routes/path'));

const port = 8080;

App.listen(process.env.PORT || port);
console.log(`Web Server is listening at: ${process.env.PORT || port}`);