var mongoose = require('mongoose');                                     
mongoose.connect('mongodb://localhost:27017/taskslist');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected!');
});

var Schema = mongoose.Schema;

var taskSchema = new Schema ({
  body: String, 
  isCompleted: Boolean, 
});

let Tasks = mongoose.model('Tasks', taskSchema);

module.exports.Tasks = Tasks;