const express = require('express');
const routes = require('./routes/index')
const app = express()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT);
});