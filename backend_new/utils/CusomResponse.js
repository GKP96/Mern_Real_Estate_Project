export const CustomResponse = (status, message, data) => {
  const obj = {
    status: status,
    message: message,
  };
  data !== undefined ? (obj.data = data) : "";
  return obj;
};
