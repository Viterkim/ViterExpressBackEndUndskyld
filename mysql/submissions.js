var connection = require('../mysql/dbconnection');

function getSubmissions(){
  return new Promise(function(resolve, reject){
    var returnValue;
    connection.query('SELECT * FROM submissions', function (error, results, fields) {
      if (error){
        reject(error);
      } 
      returnValue = results;
      resolve(returnValue);
    });
  });
}

function postNewUndskyldning(foreslag, navn){
  return new Promise(function(resolve, reject){
    var returnValue;
    connection.query(`INSERT INTO submissions (foreslag, navn) VALUES ("${foreslag}","${navn}")`, function (error, results, fields) {
      if (error){
        reject(error);
      }
      resolve(results.resolve);
    });
  });
}

module.exports = {
  getSubmissions,
  postNewUndskyldning
}