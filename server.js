const express = require('express');

const app = express();
const dbConnect = require('./src/configs/connectDB');
const dotenv = require('dotenv').config();
app.use('/', require('./src/routes/path'));
const contactsRouter = require('./src/routes/contacts')
const { notFound, errorHandler } = require('./src/middlewares/errorHandler');

const bodyParser = require('body-parser')
const port = 8080;

dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/contacts", contactsRouter);


app.use(notFound);
app.use(errorHandler)
app.listen(process.env.PORT || port);
console.log(`Web Server is listening at: ${process.env.PORT || port}`);