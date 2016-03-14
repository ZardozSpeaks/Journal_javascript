module.exports.Journal = Journal;

function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.countWords = function() {
  var bodyArr = this.body.split(" ");
  return bodyArr.length
}
