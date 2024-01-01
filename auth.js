const jwt = require('jsonwebtoken');
const secretKey = "your-secret-key";

const ensureLoggedIn = (redirectRoute) => (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token) {
    return res.redirect(redirectRoute);
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.redirect(redirectRoute);
    }
    req.user = decoded;
    next();
  });
};

module.exports = ensureLoggedIn;
