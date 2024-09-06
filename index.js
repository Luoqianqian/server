const express = require('express')
const mysql = require('./utils/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
  
  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });