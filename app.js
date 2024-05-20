const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    // console.log("middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Submit</button></form>');
});

app.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    // console.log("another middleware");
    res.send('<h1> node js </h1>')
    // res.send('{ key1: value }')
});

app.listen(3000);
