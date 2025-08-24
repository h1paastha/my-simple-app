// pages/api/env.js - Amplify version of your Vercel code

export default function handler(req, res) {
  // Your exact same functionality, just with different export syntax
  res.json({
    all_environment: process.env
  });
}
