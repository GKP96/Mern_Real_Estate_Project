
import jwt from 'jsonwebtoken';
const secretKey = "gkprealestatebusiness";
export const verifyToken = async(req, res, next)=> {
    const token = req.cookies.access_token;
    if(!token)return next(new Error(401, "Unauthorized ..."));
    try{
        const decodedToken = jwt.verify(token, secretKey);
        req.user = decodedToken;
        next();
    }catch(err){
        next(new Error(401, "Unauthorized ..."));
    }
}