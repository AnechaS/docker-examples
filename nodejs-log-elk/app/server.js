const express = require("express");
const morgan = require("morgan");
const logger = require("./logger");

const app = express();

app.use(
  morgan("short", {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Node.js Filebeat Elasticsearch!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
