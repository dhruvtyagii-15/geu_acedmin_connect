import { db } from "../db/connection.js";

export const bookAppointment = (req, res) => {
  const { student_id, teacher_id, slot_id } = req.body;
  const sql = `INSERT INTO appointment (student_id, teacher_id, slot_id) VALUES (?, ?, ?)`;

  db.query(sql, [student_id, teacher_id, slot_id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Appointment booked successfully!" });
  });
};

export const getAppointments = (req, res) => {
  const studentId = req.params.studentId;
  const sql = `SELECT * FROM appointment WHERE student_id=?`;

  db.query(sql, [studentId], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};
