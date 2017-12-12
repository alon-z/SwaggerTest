'use strict';

var utils = require('../utils/writer.js');
var Books = require('../service/BooksService');

module.exports.addBook = function addBook (req, res, next) {
  var body = req.swagger.params['body'].value;
  Books.addBook(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBook = function updateBook (req, res, next) {
  var body = req.swagger.params['body'].value;
  Books.updateBook(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
