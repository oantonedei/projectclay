const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock admin user (in production, this would be in a database)
const adminUser = {
  id: 1,
  email: 'admin@theprojectclay.com',
  password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
  name: 'Project Clay Admin',
  role: 'admin'
};

// Login validation
const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
];

// Login route
router.post('/login', loginValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if user exists
    if (email !== adminUser.email) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, adminUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: adminUser.id, 
        email: adminUser.email, 
        role: adminUser.role 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Verify token middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};

// Get current user
router.get('/me', verifyToken, (req, res) => {
  res.json({
    user: {
      id: adminUser.id,
      email: adminUser.email,
      name: adminUser.name,
      role: adminUser.role
    }
  });
});

// Change password
router.post('/change-password', verifyToken, [
  body('currentPassword').isLength({ min: 6 }),
  body('newPassword').isLength({ min: 6 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { currentPassword, newPassword } = req.body;

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, adminUser.password);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    
    // In production, update the password in the database
    // adminUser.password = hashedNewPassword;

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Logout
router.post('/logout', verifyToken, (req, res) => {
  // In production, you might want to blacklist the token
  res.json({ message: 'Logged out successfully' });
});

module.exports = router; 