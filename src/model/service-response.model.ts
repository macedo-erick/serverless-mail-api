export interface IServiceResponse {
  statusCode: number;
  timestamp: number;
  payload: object;
}


export class ServiceResponse implements IServiceResponse {
  statusCode: number;
  timestamp: number;
  payload: object;

  constructor(statusCode: number, payload: object) {
    this.statusCode = statusCode;
    this.timestamp = new Date().getTime();
    this.payload = payload;
  }
}