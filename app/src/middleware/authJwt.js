const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "토큰이 존재하지 않습니다"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "토큰은  존재하지만 맞지않음"
      });
    }
    req.u_id = decoded.u_id;
    next();
  });
};

const isAdmin = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
        message: "토큰이 존재하지 않습니다"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {

        if (err) {
        return res.status(401).send({
            message: "관리자만 접근할 수 있습니다1"
        });
        }

        //role이 admin이 아닌 경우 res를 보냄
        if (decoded.role !== "admin") {
            return res.status(403).send({
                message: "관리자만 접근할 수 있습니다2"
            });
        }
        next();
    });
};

module.exports = {
    verifyToken,
    isAdmin,
}
