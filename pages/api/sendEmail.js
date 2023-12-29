// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: process.env.NEXT_PUBLIC_SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message, interest, country } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  const mailOptions = {
    from: `${email}`,
    to: 'elmasinc02@gmail.com', // Replace with a valid 'to' email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\n Ineterested in: ${interest}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
}