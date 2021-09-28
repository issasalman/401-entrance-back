"use strict";
const mongoose = require("mongoose");

class Fruit {
  constructor(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const fruits = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  price: { type: String },
  email: { type: String },

});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const myFruitsModel = mongoose.model("myFruit", fruits);

module.exports = { Fruit ,myFruitsModel};
