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
exports.handler = void 0;
const serverless_http_1 = __importDefault(require("serverless-http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mail_1 = require("../service/mail");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const apiContext = process.env.API_CONTEXT;
const mailService = new mail_1.MailService();
app.post(apiContext, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield mailService.sendMail(req.body);
    return res.status(response.statusCode).json(response);
}));
app.use((req, res) => {
    return res.status(404).json({
        error: "Not Found",
    });
});
exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=mail.js.map