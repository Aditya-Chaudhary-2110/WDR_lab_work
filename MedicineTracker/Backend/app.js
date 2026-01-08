const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const {
  processNotifications,
  setSocket,
} = require("./services/notificationService"); // updated

const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: { origin: "*" }, // replace "*" with your frontend URL in production
});

// Make io available to notification service
setSocket(io);

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Join a room for a specific user
  socket.on("join_user", (userId) => {
    socket.join(`user_${userId}`);
    console.log(`User ${userId} joined room`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./Routes"));

// Run notification processor every minute
setInterval(() => {
  processNotifications();
}, 60 * 1000);

// Start server
const PORT = process.env.PORT || 3030;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
