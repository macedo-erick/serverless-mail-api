import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import { MailService } from "../service/mail-service";
import { ServiceResponse } from "../model/service-response.model";

const app = express();
app.use(bodyParser.json());

const stage = process.env.STAGE as string;
const mailService = new MailService();

app.post(stage, async (req, res) => {
  const response: ServiceResponse = await mailService.sendMail(req.body);

  return res.status(response.statusCode).json(response);
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
