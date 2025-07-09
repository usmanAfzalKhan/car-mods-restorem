// netlify/functions/sendContact.js
exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return { statusCode: 500, body: "Missing RESEND_API_KEY" };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  // Format the email body (customize if you want)
  const message = `
    <strong>New Contact Form Submission</strong><br><br>
    <b>Name:</b> ${data.name}<br>
    <b>Phone:</b> ${data.phone}<br>
    <b>Date:</b> ${data.date}<br>
    <b>Type of Service:</b> ${Array.isArray(data.services) ? data.services.join(', ') : ''}<br>
    <b>Message:</b> <br>${data.message ? data.message.replace(/\n/g, "<br>") : ""}
  `;

  // Customize these!
  const toEmail = "restor.em@gmail.com";      // <--- YOUR destination email here
  const fromEmail = "Restor.em Contact <onboarding@resend.dev>"; // Use your sender domain if verified!

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        subject: "New Contact Form Submission (Restor.em)",
        html: message
      })
    });

    if (!result.ok) {
      const errorBody = await result.text();
      return { statusCode: 500, body: `Failed to send: ${errorBody}` };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: "Failed to send email." };
  }
};
