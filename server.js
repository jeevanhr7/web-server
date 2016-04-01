/**
 * Created by Chethan H R on 22-Mar-16.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;


var middleware = require('./middleware.js');


app.use(middleware.logger);

//app.use('/', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.logger, function (req, res) {
    res.send("About us !");
});

app.listen(PORT, function () {
    console.log('listning at  Port' + PORT + '!');
});