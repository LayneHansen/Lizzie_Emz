const express = require('express');
const routes = require('./routes/index');
const app = express();
require('./config/db')();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('app running on PORT: ' + PORT);
});