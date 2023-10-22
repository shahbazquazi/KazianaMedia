import nodemailer from "nodemailer";

export default async function sendResume(resumeDetails) {
  const { myemail, subject, message, content } = resumeDetails;
  //Create transporter object to send email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  //Email options
  const emailOptions = {
    from: process.env.SMTP_EMAIL,
    to: myemail,
    subject: subject,
    text: message,
    attachments: [
      {
        filename: "resume.pdf",
        content: content,
        contentType: "application/pdf",
      },
    ],
  };
  //Send Email
  await transporter.sendMail(emailOptions);
}
