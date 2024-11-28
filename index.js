import express from "express";
import dbConnect from "./database.js";
import { router as createPostRouter } from "./Routes/createPost.router.js";

const app = express();
let isDbConnected = false;

// Middleware for DB connection check
app.use((req, res, next) => {
  if (!isDbConnected) {
    return res.status(503).json({ message: "Database connection not ready" });
  }
  next();
});

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, this is me.");
});

app.use("/createPost", createPostRouter);

// Database Connection
dbConnect()
  .then(() => {
    isDbConnected = true;
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Terminate the app if DB connection fails
  });

// Export app for serverless function
export default (req, res) => {
  app(req, res);
};
