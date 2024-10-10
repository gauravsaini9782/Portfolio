const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Environment variables
const EMAIL = "gauravjetpuriya888@gmail.com";
const EMAIL_PASSWORD = "syua dfjk bdhh bbbe"; // Use your actual password here

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json()); // Parse JSON body

app.post("/send-mail", async (req, res) => {
  const { to, subject, text, name, phoneNumber, serviceOfInterest } = req.body;

  // Nodemailer transport setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  // Construct the email message with the new fields
  const mailOptions = {
    from: EMAIL,
    to: to || EMAIL,
    subject: subject || "Node.js Mail Testing",
    text: `
      Name: ${name || "N/A"}
      Phone Number: ${phoneNumber || "N/A"}
      Service of Interest: ${serviceOfInterest || "N/A"}
      
      Message: ${text || "Hello, this is a great mail."}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
