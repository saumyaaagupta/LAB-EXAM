// backend/index.js

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS to allow cross-origin requests
app.use(express.json()); // Middleware for parsing JSON requests

// Define a sample route
app.get("/api/data", (req, res) => {
  res.json([{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }]);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
