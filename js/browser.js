var journal = require('./journal.js');

$(function(){
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var output = new journal.Journal(title,body);
    $('#post-area').append("<h1>" + output.title + "</h1>" + "<p>" + output.body + "</p>" + "<p>" + "Number of words in body: " + output.countWords() + "</p>");
  });
});
