export class ServiceResponse {
  statusCode: number;
  timestamp: number;
  payload: object;

  constructor(statusCode: number, payload: object) {
    this.statusCode = statusCode;
    this.timestamp = new Date().getTime();
    this.payload = payload;
  }
}
