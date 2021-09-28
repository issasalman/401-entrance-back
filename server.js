const express = require("express");

const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3020;

const MONGO_URL = process.env.MONGO_URL;

const mongoose = require("mongoose");

mongoose.connect(MONGO_URL);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const { getIndex } = require("./controllers/index.controller");

const { getFruit, addFruit ,getFavFruit,deleteFruit,updateFruit} = require("./controllers/fruit.controller");
app.get("/", getIndex);
app.get("/fruit", getFruit);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++


app.get("/fruiting", getFavFruit);
app.post("/fruiting", addFruit);
app.delete("/fruiting/:_id", deleteFruit);
app.put("/fruiting/:_id", updateFruit);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++


app.listen(PORT, () => {
  console.log(`Server starting  at  PORT ${PORT}`);
});
