const path = require('path');
const express =  require('express');
const bodyParser = require('body-parser');

const ENV =  process.env.MODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/geocode', require('./api/geocode'));
app.use('/api/revcode', require('./api/revcode'));

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`)
});





module.exports = app;