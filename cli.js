var journal = require('./journal.js').journal;

console.log('Create a journal entry');
var title = prompt('Enter Title');
var body = prompt('Enter Body');
var journalEntry = journal(title, body);
console.log(journalEntry.title);
console.log(journalEntry.body);
