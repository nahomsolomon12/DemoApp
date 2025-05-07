// server.js
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/start", (req, res) => {
  res.json({
    message: "Welcome to the Soccer API",
  });
});

// localhost:3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
