import nodemailer from 'nodemailer'

export async function sendMail(to: string, subject: string, text: string, html?: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_FROM as string,
    to,
    subject,
    text,
    html,
  })
}
