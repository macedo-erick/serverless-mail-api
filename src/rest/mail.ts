import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import MailService from "../service/mail.service";
import { IServiceResponse } from "../model/response.model";

const app = express();
const stage = process.env.STAGE as string;
const service = MailService();

app.use(bodyParser.json());

app.post(stage, async (req, res) => {
  const response: IServiceResponse = await service.sendMail(req.body);

  return res.status(response.statusCode).json(response);
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
