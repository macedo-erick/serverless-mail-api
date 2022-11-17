"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const service_response_1 = require("../model/service-response");
class MailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.STMP_PORT),
            secure: Boolean(process.env.SMTP_SECURE),
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASSWORD,
            },
        });
    }
    sendMail(mail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const info = yield this.transporter.sendMail({
                    from: '"noreply" <auxb.falhas@gmail.com>',
                    to: mail.recipients,
                    subject: mail.subject,
                    html: mail.body,
                });
                return new service_response_1.ServiceResponse(200, new Date().getTime(), `Mail ${info.messageId} sent successfully `);
            }
            catch (e) {
                return new service_response_1.ServiceResponse(500, new Date().getTime(), `Mail could not be sent`, "MailSentException");
            }
        });
    }
}
exports.MailService = MailService;
//# sourceMappingURL=mail.js.map