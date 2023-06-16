const errorMiddleware = async (err, req, res, next) => {
  res.status(403).json({ error: errorMessage });
};

module.exports = errorMiddleware;
