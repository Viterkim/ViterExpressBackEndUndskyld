var connection = require('../mysql/dbconnection');

function getRandom(){
  return new Promise(function(resolve, reject){
    var returnValue;
    connection.query('SELECT * FROM undskyldninger ORDER BY RAND() LIMIT 1', function (error, results, fields) {
      if (error){
        reject(error);
      } 
      returnValue = results[0];
      resolve(returnValue);
    });
  });
}

function getAll(){
  return new Promise(function(resolve, reject){
    var returnValue;
    connection.query('SELECT * FROM undskyldninger', function (error, results, fields) {
      if (error){
        reject(error);
      } 
      returnValue = results;
      resolve(returnValue);
    });
  });
}

function getById(id){
  return new Promise(function(resolve, reject){
    var returnValue;
    connection.query('SELECT * FROM undskyldninger WHERE id=' + id, function (error, results, fields) {
      if (error){
        reject(error);
      } 
      returnValue = results[0];
      resolve(returnValue);
    });
  });
}

// async function lort(){
//   var bingo = await getRandom();
//   console.log(bingo);
// }

module.exports = {
    getRandom,
    getAll,
    getById
}