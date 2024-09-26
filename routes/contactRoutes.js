const express = require("express");
const multer = require("multer");
const {
  handleContactFormSubmission,
} = require("../controllers/contactController");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // For file uploads

// Route to handle contact form submission
router.post("/", upload.single("file"), handleContactFormSubmission);

module.exports = router;
