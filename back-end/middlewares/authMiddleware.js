const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const access_token = req.cookies.access_token;
  if (!access_token) {
    return res.status(401).json({ error: 'Authorization token required' });
  }
  try {
    jwt.verify(access_token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = authMiddleware;
