import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import { IServiceResponse } from "../model/service-response.model";
import sendMail from "../service/mail.service";

const app = express();
app.use(bodyParser.json());

const stage = process.env.STAGE as string;

app.post(stage, async (req, res) => {
  const response: IServiceResponse = await sendMail(req.body);

  return res.status(response.statusCode).json(response);
});

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
