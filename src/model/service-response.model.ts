export interface IServiceResponse {
  statusCode: number;
  timestamp: number;
  payload: object;
}

const ServiceResponse = () => {
  const create = (statusCode: number, payload: any): IServiceResponse => {
    return {
      payload: payload,
      statusCode: statusCode,
      timestamp: new Date().getTime(),
    };
  };

  return {
    create,
  };
};

export default ServiceResponse;