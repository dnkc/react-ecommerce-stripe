const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const createCheckoutSession = require("./api/checkout");
const webhook = require("./api/webhook");
const paymentIntent = require("./api/paymentIntent");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/create-checkout-session", createCheckoutSession);

app.post("/webhook", webhook);

app.post("/create-payment-intent", paymentIntent);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
