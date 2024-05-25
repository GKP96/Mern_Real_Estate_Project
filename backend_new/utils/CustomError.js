export const CustomError = (statusCode, msg) => {
  let err = new Error();
  err.message = msg;
  err.statusCode = statusCode;
  return err;
};
