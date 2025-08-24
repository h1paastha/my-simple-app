module.exports = (req, res) => {
  res.json({
    all_environment: process.env
  });
};
