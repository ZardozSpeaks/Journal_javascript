var journal = require('./journal.js');
var prompt = require('prompt');
prompt.start();

prompt.get(['title', 'body'], function(err, result){
  var title = result.title;
  var body = result.body;
  var journalEntry = new journal.Journal(title, body);
  console.log(journalEntry.title);
  console.log(journalEntry.body);
});
