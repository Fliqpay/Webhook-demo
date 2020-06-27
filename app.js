const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const webhookRouter = require("./routes/webhook");

const app = express();
const port = 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/webhook", webhookRouter);

app.listen(port, () => {
  console.log(`Webhook server started on port ${port}`);
});

module.exports = app;
