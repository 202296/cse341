const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const dbConnect = require('./src/configs/connectDB');
const dotenv = require('dotenv').config();
app.use('/', require('./src/routes/path'));


const port = 8080;
const contactsRouter = require('./src/routes/contacts')
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/contacts", contactsRouter);
app.listen(process.env.PORT || port);
console.log(`Web Server is listening at: ${process.env.PORT || port}`);