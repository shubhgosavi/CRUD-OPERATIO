const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,"
  );
  res.header("Access-Control-Allow-Methods", "POST");
  next();
});
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employeedb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(bodyParser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.use(function(req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });
app.post("/register", (req, res) => {
  console.log(JSON.stringify(req.body));
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let sql = "INSERT INTO user VALUES(?,?,?)";
  con.query(sql, [, firstName, lastName], function(err, result) {
    if (err) throw err;
    res.send("record inserted successfully..!" + result);
  });
});

app.get("/getUser", (req, res) => {
  var sql = "SELECT * FROM user";
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/deleteUser", (req, res) => {
  let users = req.body;

  console.log(typeof users);
  users.forEach(element => {
    console.log(element);
  });

  let sql = `DELETE FROM user WHERE user_id in(?) `;
  con.query(sql, [users], function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/updateUser", (req, res) => {
  console.log("update call..!");
  let firstName = req.body.first;
  let lastName = req.body.last;
  let user_id = req.body.id;
  console.log(user_id);

  let sql = "UPDATE user SET firstName= ?,lastName=? WHERE user_id IN(?)";
  con.query(sql, [firstName, lastName, user_id], function(err, result) {
    if (err) throw err;
    res.send("record updasted successfully..!" + result);
  });
});
  
