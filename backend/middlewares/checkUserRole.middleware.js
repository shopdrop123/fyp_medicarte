const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_ACCESS_SECRET = process.env.JWT_SECRET;

// Middleware function to check for user role
const checkUserRole = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(' ')[1];
  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized: Missing access token' });
  }

  try {
    const decodedToken = jwt.verify(accessToken, JWT_ACCESS_SECRET);
    if (decodedToken.userRole === 'user') {
      req.userId = decodedToken.userId;
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden: User does not have a User role' });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized: Invalid access token' });
  }
};

module.exports = checkUserRole;
