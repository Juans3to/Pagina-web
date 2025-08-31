const express = require('express');
const productosControl = require('./Controllers/productosControl');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(express.static('Frontend'));

app.use(productosControl);
app.listen(3000, () => {
    console.log('Backend ejecutandose en el puerto 3000');
});