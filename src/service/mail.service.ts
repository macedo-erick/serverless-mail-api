import { createTransport } from "nodemailer";
import mailFactory, { Mail } from "../model/mail.model";
import serviceResponse, { IServiceResponse } from "../model/service-response.model";

const response = serviceResponse();
const mail = mailFactory();

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
  const sendMail = async (request: Mail): Promise<IServiceResponse> => {
    try {
      const info = await transporter.sendMail(mail.create(request));

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
