import express from "express";
import cors from "cors";
import mysql from "mysql2";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Create uploads folder if it doesn't exist
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// MySQL Connection
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
  console.log("✅ Connected to MySQL");
});

// ✅ POST Route to handle form submission
app.post("/userdata", upload.single("img"), (req, res) => {
  const { title, description } = req.body;
  const img_url = req.file ? req.file.filename : null;
  const sql = "INSERT INTO users (title, description, file) VALUES (?, ?, ?)";
 db.query(sql,[title,description,img_url], (err, result) => {
    if (err) {
      console.error("❌ DB Insert Error:", err.sqlMessage || err.message);
      return res.json({ error: "Database insert failed" });
    }
    // res.json({ message: "Data inserted successfully", id: result.insertId });
  })
});
app.get("/getdata", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ DB Fetch Error:", err.sqlMessage || err.message);
      return res.json({ error: "Database fetch failed" });
    }
    res.json(results); // Send array of user rows
  });
});


// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
