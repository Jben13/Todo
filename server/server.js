const express = require('express');           
const app = express();
const bodyParser = require('body-parser'); 
const db = require('../database/index.js');   

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//Post Request 






// //Get Request 
app.get('/taskslist', function(req, res) {
  db.Tasks.find({})
  .sort({createdAt: -1})
  .exec(function(err, data) {
    if (err) {
      console.log('Error - get request');
    } else {
      console.log('Tasks have been sent');
      res.send(data);
    }
  });
});






/***** Server Set Up *******/
const port = 3551;

app.listen(port, function() {
  console.log('Server is running on port :' + port);
});