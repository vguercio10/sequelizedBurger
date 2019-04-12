var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "sequelize_burgerdb"
  })
}
//   This code is making the connection
  connection.connect(function (err) {
      if (err) {
        //   if there is an error this will print
          console.log("error connecting" + err.stack);
          return;
      }
    //   if connection this will print with connection threadID
      console.log("connected as id " + connection.threadId);
  });
// This is exporting the connection for ORM use
  module.exports = connection;