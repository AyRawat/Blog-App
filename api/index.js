import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import { createServer } from "http";

import path from "path";
import { connectDB } from "./db.js";

dotenv.config({ path: "./api/.env" });
const __dirname = path.resolve();
console.log("dirname", __dirname);

connectDB();

const app = express();
app.use(cors());

const server = new createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
  transports: ["websockets", "polling"],
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("comment", (msg) => {
    console.log("new comment received", msg);
    io.emit("new-comment", msg);
  });
  socket.on("delete-comment", (commentId) => {
    console.log("Comment deleted with id:", commentId);
    io.emit("delete-comment", commentId);
  });
  socket.on("disconnect", () => {
    console.log("USer disconnected", socket.id);
  });
});

export { io };

server.listen(process.env.PORT || 9000, () => {
  console.log("Server is running on port 9000!");
});
