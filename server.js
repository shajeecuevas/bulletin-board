//server js will load the things we need
var express = require('express');
const app = express();
//var pg = require('pg');
//var parser = require('body-parser');

//app.use(parser.json());
//connect to the db
var connectionString = 
"postgres://postgres:qwerty@localhost:5432/postgres";
//var pgClient = new pg.Client(connectionString);
//pgClient.connect();

app.use(express.static('public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//use res.render to load up an ejs view file
//index page
app.get('/', function(req,res){
    res.render('index');
});

//bulletin board
app.get('/board', function(req, res){
    res.render('board');
});

// app.get('/*', function(req,res){
//     response.send('The page you are looking for cannot be found.' );
// });


app.listen(3000);
console.log('Server is listening on port 3000');