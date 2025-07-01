const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Mocked deployment info
app.get("/deployment", (req, res) => {
  res.json({
    version: "1.3.2",
    commit: "94ab7c9",
    env: process.env.ENV || "development",
    deployedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

