import express from "express";
import cors from "cors";
import mysql from "mysql2";

const port = 3015;
const app = express();

app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_blog",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }
  console.log("Connected successfully to MySQL");
});

app.post("/userdata", (req, res) => {
  // console.log("Request Body:", req.body);

  const { title, description } = req.body;

 
  const sql = "INSERT INTO blogtable (title, description) VALUES (?, ?)";
  db.query(sql, [title, description], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).send({ error: "Database insert failed" });
    }
    res.send({ message: "User added", id: result.insertId });
  });
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

