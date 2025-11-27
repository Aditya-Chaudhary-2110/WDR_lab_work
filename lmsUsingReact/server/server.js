import express from "express";
import cors from "cors";

import studentRoutes from "./routes/studentRoute.js";
import courseRoutes from "./routes/courseRoute.js";
import moduleRoutes from "./routes/moduleRoute.js";
import facultyRoutes from "./routes/facultyRoute.js";

const application = express();

application.use(cors());
application.use(express.json());

// Student APIs
application.use("/api/students", studentRoutes);

// Course APIs
application.use("/api/courses", courseRoutes);

// Module APIs
application.use("/api/modules", moduleRoutes);

// Faculty APIs
application.use("/api/faculty", facultyRoutes);

const PORT = 5000;

application.listen(PORT, () => {
  console.log("Server started successfully");
});
