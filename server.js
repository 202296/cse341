const express = require('express');
const App = express();

App.use('/', require('./routes/path'));

const port = 3000;

App.listen(process.env.PORT || port);
console.log(`Web Server is listening at: ${process.env.PORT || port}`);