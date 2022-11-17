import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import { Mail } from "../model/mail";

const app = express();
const apiContext = process.env.API_CONTEXT;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.STMP_PORT),
  secure: Boolean(process.env.SMTP_SECURE),
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

app.post(apiContext, async (req, res) => {
  const mail = req.body as Mail;

  console.log(mail.recipients);

  const info = await transporter.sendMail({
    from: '"noreply" <auxb.falhas@gmail.com>',
    to: mail.recipients.join(","),
    subject: mail.subject,
    html: mail.body,
  });

  return res.status(200).json({
    message: `Mail sent successfully ${info.messageId}`,
  });
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
