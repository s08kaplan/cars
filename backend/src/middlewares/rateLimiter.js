const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 1000, 
  standardHeaders: true, 
  legacyHeaders: false,  // Disable the `X-RateLimit-*` headers
  keyGenerator: (req, res) => req.ip,
  message: 'Too many requests, please try again later.',
}); 