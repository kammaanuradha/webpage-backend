const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  try {
    let token = req.header("x-token");
    console.log(req);
    if (!token) {
      return res.status(400).json({status:400,message:"Token Not Found"});
    }
    let decoded = jwt.verify(token, "jwtPassword");
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json( {status:400,message:"Authentication Error"});
  }
}

module.exports = {
  userAuth,
};
