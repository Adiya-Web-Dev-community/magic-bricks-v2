const jwt = require("jsonwebtoken");

const adminMiddleware = (req, resp, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (_id) {
        req.adminId = _id;
        next();
      }
    } else {
      resp.json({ success: false, msg: "token expired, access denied" });
    }
  } catch (err) {
    resp.json({ success: false, msg: err });
  }
};

module.exports = adminMiddleware;
