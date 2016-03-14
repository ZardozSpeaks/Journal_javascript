(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./journal.js":2}],2:[function(require,module,exports){
module.exports.Journal = Journal;

function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.countWords = function() {
  var bodyArr = this.body.split(" ");
  return bodyArr.length
}

},{}]},{},[1]);
