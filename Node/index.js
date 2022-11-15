var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "khanbhai",
  database:"society"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from society where sid='s08'", function (err, result) {
    if (err) throw err;
    console.log(result)
  });

});