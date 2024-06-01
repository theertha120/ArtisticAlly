const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Create connection to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ArShTh_990&*",
  database: "registration_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling registration
app.post("/register", (req, res) => {
  const { firstName, lastName, email, phone, dob, username, password } =
    req.body;

  // Insert user data into MySQL database
  const sql =
    "INSERT INTO users (firstName, lastName, email, phone, dob, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [firstName, lastName, email, phone, dob, username, password],
    (err, result) => {
      if (err) {
        console.error("Error registering user:", err);
        res.status(500).json({
          success: false,
          message: "Error registering user. Please try again.",
        });
      } else {
        console.log("User registered successfully");
        res
          .status(200)
          .json({ success: true, message: "User registered successfully" });
      }
    }
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
