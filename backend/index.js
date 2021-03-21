const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
