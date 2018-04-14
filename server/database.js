const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllFavorites = function(callback) {
  connection.query('SELECT original_title, overview, release_date, vote_average, poster_path FROM MOVIES;', function(error, results, fields) {
    if (error) {
      console.error(error)
    } else {
      callback(results);
    }
  })
};
const saveFavorite = function({original_title, release_date, vote_average, poster_path}, callback) {
  connection.query(`INSERT INTO MOVIES (original_title, release_date, vote_average, poster_path ) VALUES ('${original_title}', '${release_date}', ${vote_average}, '${poster_path}')`, function(error, results, fields) {
    if (error) {
      console.error(error)
    } else {
      callback(results);
    }
  })  
};
const deleteFavorite = function({original_title}, callback) {
  connection.query(`DELETE FROM MOVIES WHERE original_title = '${original_title}'`, function(error, results, fields) {
    if (error) {
      console.error(error)
    } else {
      callback(results);
    }
  })
};
module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};

