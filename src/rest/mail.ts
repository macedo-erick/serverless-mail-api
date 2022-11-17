import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import { MailService } from "../service/mail";
import { ServiceResponse } from "../model/service-response";

const app = express();
app.use(bodyParser.json());

const apiContext = process.env.API_CONTEXT;
const mailService = new MailService();

app.post(apiContext, async (req, res) => {
  const response: ServiceResponse = await mailService.sendMail(req.body);

  return res.status(response.statusCode).json(response);
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
