const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "TigerWallet API" });
});

// Auth routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
