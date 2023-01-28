import { createLogger, format, transports, config } from "winston";
import { S3StreamLogger } from "s3-streamlogger";
const { combine, timestamp, json } = format;

const s3stream = new S3StreamLogger({
  bucket: process.env.API_AWS_S3_BUCKET,
  access_key_id: process.env.API_AWS_ACCESS_KEY,
  secret_access_key: process.env.API_AWS_SECRET_ACCESS_KEY,
});

const mailLogger = (component: string) => {
  return createLogger({
    levels: config.syslog.levels,
    defaultMeta: { component: component },
    transports: [
      new transports.Stream({ stream: s3stream }),
      new transports.Console(),
    ],
    format: combine(timestamp({ format: "YYYY-MM-dd HH:mm:ss" }), json()),
  });
};

export default mailLogger;
