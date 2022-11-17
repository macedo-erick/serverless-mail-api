"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
class ServiceResponse {
    constructor(status, timestamp, message, error) {
        this.statusCode = status;
        this.timestamp = timestamp;
        this.message = message;
        this.error = error;
    }
}
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=service-response.js.map