const express = require('express');
const app = express();
const ejs = require('ejs');
app.listen(8080);
console.log('listening on port 8080');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/sobre', (req, res) => {
    res.render('about');
})