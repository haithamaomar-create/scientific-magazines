const express = require('express');
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Magazine routes
router.get('/magazines', (req, res) => {
  res.json({ message: 'Get all magazines' });
});

router.get('/magazines/:id', (req, res) => {
  res.json({ message: `Get magazine ${req.params.id}` });
});

module.exports = router;
