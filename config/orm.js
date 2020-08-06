// Import MySQL connection.
var connection = require("../config/connection");

selectAll();

insertOne();

updateOne();


// Export the orm object for the model (burger.js).
module.exports = orm;