import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./db/connection.js";
import authRoutes from "./routes/auth.js";
import appointmentRoutes from "./routes/appointment.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/appointment", appointmentRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
