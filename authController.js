import { db } from "../db/connection.js";

export const register = (req, res) => {
  const { name, email, password, role } = req.body;
  const table = role === "teacher" ? "teacher" : "student";
  const sql = `INSERT INTO ${table} (name, email, password) VALUES (?, ?, ?)`;

  db.query(sql, [name, email, password], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Registration successful!" });
  });
};

export const login = (req, res) => {
  const { email, password, role } = req.body;
  const table = role === "teacher" ? "teacher" : "student";
  const sql = `SELECT * FROM ${table} WHERE email=? AND password=?`;

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(401).json({ message: "Invalid credentials" });
    res.json({ message: "Login successful!", user: result[0] });
  });
};
