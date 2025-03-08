const fs = require("fs");
const winston = require("winston");

require("winston-daily-rotate-file");

if (!fs.existsSync("./logs")) {
  fs.mkdirSync("./logs");
}

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "nodejs-filebeat-elasticsearch" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      level: "info",
      dirname: "logs",
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

module.exports = logger;
