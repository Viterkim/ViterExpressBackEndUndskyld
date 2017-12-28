var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'viter.dk',
  user     : 'transformer',
  password : '', //good luck
  database : 'undskyld'
});

module.exports = connection;