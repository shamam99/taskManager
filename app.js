const express = require('express');
const errorHandler = require('./middlware/errorHandler');
const validateStatus = require('./middlware/validateStatus');

const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/tasks', require('./routes/tasks'));
app.use(errorHandler);
app.use(validateStatus);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});