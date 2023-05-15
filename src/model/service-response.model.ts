export type ServiceResponse = {
  statusCode: number;
  timestamp: number;
  payload: object;
};

const serviceResponse = () => {
  const create = (statusCode: number, payload: any): ServiceResponse => {
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

export default serviceResponse;
