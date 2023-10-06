const express = require('express');
const cors = require('cors');
const { serve, setup } = require('swagger-ui-express');
const app = express();
const bodyParser = require('body-parser')
// Use the JavaScript Swagger definition
const swaggerDefinition = require('./swagger.json');
const dbConnect = require('./src/configs/connectDB');
const dotenv = require('dotenv').config();
app.use('/', require('./src/routes/path'));
const contactsRouter = require('./src/routes/contacts');
const { notFound, errorHandler } = require('./src/middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Serve Swagger UI at /docs
app.use('/api-docs', serve, setup(swaggerDefinition));


dbConnect()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/contacts", contactsRouter);
app.use(notFound);
app.use(errorHandler);
const port = 8080;
app.listen(process.env.PORT || port);
console.log(`Web Server is listening at: ${process.env.PORT || port}`);