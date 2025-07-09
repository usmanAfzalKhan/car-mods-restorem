// netlify/functions/sendContact.js

// Attempt to load Resend client in various export shapes
let ResendClient;
try {
  const pkg = require("resend");
  ResendClient = pkg.Resend || pkg.default || pkg;
  console.log("✅ Loaded Resend client:", Object.keys(pkg));
} catch (e) {
  console.error("❌ Could not require Resend package:", e);
}

const resend = new ResendClient(process.env.RESEND_API_KEY);

exports.handler = async function (event) {
  console.log("👉 sendContact invoked");
  console.log("• ENV RESEND_API_KEY loaded?", !!process.env.RESEND_API_KEY);
  console.log("• HTTP Method:", event.httpMethod);
  console.log("• Incoming body:", event.body);

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    console.error("❌ JSON parse error:", err);
    return { statusCode: 400, body: "Invalid JSON" };
  }

  const { name, phone, date, services = [], otherService, message } = data;

  // Build a human-readable services list
  const serviceList = services
    .map((s) =>
      s === "Other" && otherService ? `Other: ${otherService}` : s
    )
    .join(", ");

  try {
    console.log("✉️ Sending email...");
    await resend.emails.send({
      from: "onboarding@restor.em",           // your verified sender
      to:   "restoremauto@gmail.com",         // ← updated to your address
      subject: `New Booking Request from ${name}`,
      text: `
New Booking Request:

• Name: ${name}
• Phone: ${phone}
• Date: ${date}
• Services: ${serviceList}
• Message: ${message || "– none –"}
      `.trim(),
    });

    console.log("✅ Email sent successfully");
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("❌ Resend API error:", err);
    return {
      statusCode: 502,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
