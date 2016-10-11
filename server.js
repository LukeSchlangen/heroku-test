var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: true}));




// your code goes here
var cats = [{name:"Garfield", age: 5}];
app.post('/cats', function(req,res){
  var name = req.body.name;
  var age = req.body.age;

  if(!name || !age){
    res.sendStatus(400);
  } else {
    cats.push({name: name, age: age});
    // cats.push(req.body);
    res.sendStatus(201);
    console.log('cats',cats);

  }
});


app.get('/cats', function(req,res){
  console.log('cats',cats);
  res.send({'cats': cats});
});











app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.use(express.static('public'));

var portDecision = process.env.PORT || 3000;
console.log('process.env.PORT is ', process.env.PORT);
console.log('portDecision is ', portDecision);

// var server = app.listen(portDecision, function(){
var server = app.listen(process.env.PORT, function(){
  console.log('server listening for requests on port:', server.address().port);
  console.log('press control+c to quit');
});

module.exports = server;
