const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const { connectDB } = require("./config/db");
const contactRoutes = require("./routes/contactRoutes.js");

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Set up Multer for file uploads (storing files in 'uploads/' directory)
const upload = multer({ dest: "uploads/" });

// Use the contact routes
app.use("/api/contact", contactRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
