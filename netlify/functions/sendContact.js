// netlify/functions/sendContact.js
import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  try {
    const { name, phone, date, services, otherService, message } = JSON.parse(event.body);

    // Build a nice services list, including “Other” if provided
    const serviceList = services
      .map(s => s === 'Other' && otherService
        ? `Other: ${otherService}`
        : s
      )
      .join(', ');

    // Send the email
    await resend.emails.send({
      from: 'onboarding@restor.em',      // your “from” address
      to:   'your.email@example.com',     // replace with your Gmail
      subject: `New Booking Request from ${name}`,
      text: `
New Booking Request:

• Name: ${name}
• Phone: ${phone}
• Date: ${date}
• Services: ${serviceList}
• Message: ${message || '– no message –'}
      `.trim()
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error('sendContact error', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
