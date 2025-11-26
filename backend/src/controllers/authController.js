// Sprint 1: dummy controllers that just return JSON

const login = (req, res) => {
  const { email } = req.body;

  res.json({
    success: true,
    message: "Login endpoint hit successfully",
    emailReceived: email || null,
  });
};

const register = (req, res) => {
  const { email } = req.body;

  res.json({
    success: true,
    message: "Register endpoint hit successfully",
    emailReceived: email || null,
  });
};

module.exports = { login, register };
