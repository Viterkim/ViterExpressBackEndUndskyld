var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'viter.dk',
  user     : '',
  password : 'mingade',
  database : 'undskyld'
});

module.exports = connection;