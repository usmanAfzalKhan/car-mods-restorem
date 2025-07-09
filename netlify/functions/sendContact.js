// netlify/functions/sendContact.js
const nodemailer = require("nodemailer");

const {
  GMAIL_USER,
  GMAIL_PASS,
  CONTACT_TO   // your destination email
} = process.env;

// create reusable transporter using Gmail SMTP
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS
  }
});

// handler
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { name, phone, date, services = [], otherService, message } = data;
  const serviceList = services
    .map(s => s === "Other" && otherService ? `Other: ${otherService}` : s)
    .join(", ");

  let mailOptions = {
    from: `"Restor.em Contact" <${GMAIL_USER}>`,
    to: CONTACT_TO,
    subject: `New Booking Request from ${name}`,
    text: `
New Booking Request:
• Name: ${name}
• Phone: ${phone}
• Date: ${date}
• Services: ${serviceList}
• Message: ${message || "– none –"}
    `.trim()
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error("Mail error:", err);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Failed to send email" })
    };
  }
};
