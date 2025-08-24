// pages/api/env.js
export default function handler(req, res) {
  // Simple test response first
  res.status(200).json({ 
    message: "API is working!",
    method: req.method,
    timestamp: new Date().toISOString()
  });
}
