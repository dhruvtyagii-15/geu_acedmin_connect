CREATE DATABASE geu_connect;
USE geu_connect;

CREATE TABLE student (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100)
);

CREATE TABLE teacher (
  teacher_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  department VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE admin (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  role VARCHAR(50)
);

CREATE TABLE availability (
  slot_id INT AUTO_INCREMENT PRIMARY KEY,
  teacher_id INT,
  date DATE,
  start_time TIME,
  end_time TIME,
  status VARCHAR(20) DEFAULT 'available',
  FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);

CREATE TABLE appointment (
  appointment_id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  teacher_id INT,
  slot_id INT,
  booking_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'pending',
  FOREIGN KEY (student_id) REFERENCES student(student_id),
  FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id),
  FOREIGN KEY (slot_id) REFERENCES availability(slot_id)
);

CREATE TABLE message (
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  sender_id INT,
  receiver_id INT,
  content TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
