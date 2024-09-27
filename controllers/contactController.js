const Contact = require("../models/contact");
const { sendEmail } = require("../services/emailService");

const handleContactFormSubmission = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const file = req.file;

  try {
    // Save form data to the database
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
      file: file ? file.filename : null,
    });
    await newContact.save();

    // Send an email notification using the email service
    await sendEmail({ name, email, phone, message, file });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form" });
  }
};

module.exports = { handleContactFormSubmission };
