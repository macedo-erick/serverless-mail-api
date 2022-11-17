export class ServiceResponse {
  statusCode: number;
  timestamp: number;
  message: string;
  error: string;

  constructor(
    status: number,
    timestamp: number,
    message: string,
    error?: string
  ) {
    this.statusCode = status;
    this.timestamp = timestamp;
    this.message = message;
    this.error = error;
  }
}
