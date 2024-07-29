const express = require("express");
const data = require("./db.json");
const app = express();
const port = 8080;
const cors = require("cors");
app.use(cors());

app.get("/products", (req, res) => res.json(data.products));
app.get("/categories", (req, res) => res.json(data.categories));

app.listen(port, () => console.log("Connected"));
