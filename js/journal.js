module.exports.Journal = Journal;

var moment = require('moment');

function Journal(title, body) {
  this.title = title;
  this.body = body;
  this.timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm a");
}

Journal.prototype.countWords = function() {
  var bodyArr = this.body.split(" ");
  return bodyArr.length;
};
