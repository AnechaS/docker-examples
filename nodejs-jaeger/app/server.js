require("./tracing"); // Import tracing before anything else

const express = require("express");
const mysql = require("mysql2/promise");

// MySQL Connection
const pool = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "password",
  database: "sample",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jaeger!");
});

app.get("/slow", (req, res) => {
  setTimeout(() => res.send("This request was slow!"), 2000);
});

app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database query failed");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
