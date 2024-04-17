
export  const CustomError = (msg,statusCode )=>{
    let err = new Error();
    err.message = msg;
    err.statusCode = statusCode;
    return err;
}