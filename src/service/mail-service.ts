import * as nodemailer from "nodemailer";
import { Mail } from "../model/mail.model";
import { ServiceResponse } from "../model/service-response.model";

export class MailService {
  private readonly transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.STMP_PORT),
    secure: Boolean(process.env.SMTP_SECURE),
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  async sendMail(mail: Mail): Promise<ServiceResponse> {
    try {
      const info = await this.transporter.sendMail({
        from: '"noreply" <auxb.falhas@gmail.com>',
        to: mail.recipients,
        subject: mail.subject,
        html: mail.body,
      });

      return new ServiceResponse(200, {
        message: `Mail ${info.messageId} sent successfully `,
      });
    } catch (e) {
      return new ServiceResponse(500, {
        message: `Mail could not be sent`,
        error: "MailSentException",
      });
    }
  }
}
