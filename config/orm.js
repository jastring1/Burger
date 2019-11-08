var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, col1, val2, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES (?)";
      connection.query(queryString, [table, col1, val2], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    updateOne: function(table, col, val, id, cb) {
      var queryString = "UPDATE ?? SET ??=? WHERE id=?;";
      connection.query(queryString, [table,col,true,id], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  }
  
  module.exports = orm;