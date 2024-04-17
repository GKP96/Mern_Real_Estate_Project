const jwt = require("jsonwebtoken");
const secretKey = "gkprealestatebusiness";

let verifyToken = (token) => {
  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "Authentication token is missing",
    });
  }
  // Extract the token without the "Bearer " prefix
  const tokenParts = token.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return {
      message: "Invalid token format",
      success: false,
    };
  }

  try {
    const decoded = jwt.verify(tokenParts[1], secretKey);
    req.user = decoded;
    return{
      message:"authenticated !",
      success: true,
    }
  } catch (e) {
    return {
      message: "authentication failed !",
      success: false,
    }
  }
};


module.exports = {
    verifyToken,
    
}
