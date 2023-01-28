import { createTransport } from "nodemailer";
import Mail, { IMail } from "../model/mail.model";
import ServiceResponse, { IServiceResponse } from "../model/response.model";

const response = ServiceResponse();
const mailFactory = Mail();

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.STMP_PORT),
  secure: Boolean(process.env.SMTP_SECURE),
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

const MailService = () => {
  const sendMail = async (mail: IMail): Promise<IServiceResponse> => {
    try {
      const info = await transporter.sendMail(mailFactory.create(mail));

      return response.create(200, {
        message: `Mail ${info.messageId} sent successfully `,
      });
    } catch (e) {
      return response.create(500, {
        message: `Mail could not be sent`,
        error: "MailSentException",
      });
    }
  };

  return {
    sendMail,
  };
};

export default MailService;
