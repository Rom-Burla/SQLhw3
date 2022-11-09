const express = require("express");
const app = express();
const mysql = require("mysql");
const { join } = require("path");
const port = 3000;

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cars",
});

app.set("view engien", "ejs");
app.set("views", join(__dirname, "views"));

app.listen(port, () => {
  console.log(`listining on port ${port}`);
});

let cars = [
  ["Kia", "2017", 100000],
  ["Mitsubishi", "2017", 150000],
  ["Tesla", "2017", 250000],
];

let insertCars = () => {
  let carInsert = `INSERT INTO \`car sales\`(\`manufacturer\`, \`year_of_manufacture\`, \`price\`) VALUES ('${cars[0][0]}','${cars[0][1]}','${cars[1][2]}'),('${cars[1][0]}','${cars[1][1]}','${cars[0][2]}'),('${cars[2][0]}','${cars[2][1]}','${cars[2][2]}')`;
  connection.query(carInsert, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
};

let selectCars = () => {
  let carSelect = `SELECT * FROM \`car sales\``;
  let data = connection.query(carSelect, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
  console.log(data);
};
// insertCars();
selectCars();
