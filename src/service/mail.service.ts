import { createTransport } from "nodemailer";
import mail, { IMail } from "../model/mail.model";
import serviceResponse, { IServiceResponse } from "../model/service-response.model";

const response = serviceResponse();
const mail = mail();

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.STMP_PORT),
  secure: Boolean(process.env.SMTP_SECURE),
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

const mailService = () => {
  const sendMail = async (mail: IMail): Promise<IServiceResponse> => {
    try {
      const info = await transporter.sendMail(mail.create(mail));

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

export default mailService;
