import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import mailFactory from "../service/mail.service";
import { IServiceResponse } from "../model/service-response.model";

const app = express();
const mailService = mailFactory();

app.use(bodyParser.json());

app.post("/api/v1/mails", async (req, res) => {
  const response: IServiceResponse = await mailService.sendMail(req.body);

  return res.status(response.statusCode).json(response);
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
