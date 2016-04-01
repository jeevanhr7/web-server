/**
 * Created by Chethan H R on 22-Mar-16.
 */
var express = require('express');
var app = express();
var PORT=3000;


var middleware=require('./middleware.js');
//app.use(middleware.requireautentication);
app.use(middleware.logger);


app.get('/', function (req, res) {
    res.send("hello Expresss");
});


app.get('/about',middleware.logger, function (req, res) {
    res.send("About us !");
});
app.use(express.static(__dirname + '/public'))



app.listen(PORT,function(){
console.log('listning at  Port'+PORT+'!');
});