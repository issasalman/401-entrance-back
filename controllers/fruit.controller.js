"use strict";

const axios = require("axios");
require("dotenv").config();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const { Fruit, myFruitsModel } = require("../models/fruit.model");
const getFruit = async (req, res) => {
  const url = "https://fruit-api-301.herokuapp.com/getFruit";
  await axios.get(url).then((result) => {
    const fruitWanted = result.data.fruits.map((item) => {
      return new Fruit(item.name, item.image, item.price);
    });
    res.json(fruitWanted);
  });
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
const addFruit = async (req, res) => {
  const { name, image, price,email } = req.body;
  const newFruit = new myFruitsModel({
    name,
    image,
    price,
    email
  });
  newFruit.save();
  res.json(newFruit);
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const getFavFruit = async (req, res) => {
  myFruitsModel.find({email:req.query.email}, (error, favData) => {
    res.json(favData);
  });
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const deleteFruit = async (req, res) => {
  const fruitName = req.params._id;

  myFruitsModel.deleteOne({ _id: fruitName }, (error, deleteData) => {
    res.json(deleteData);
  });
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const updateFruit=async(req,res)=>{
  const { name, image, price } = req.body;

  const fruitName = req.params._id;

  myFruitsModel.findByIdAndUpdate({_id: fruitName},{ name, image, price },{new:true},(error,UpdateData)=>{


    res.json(UpdateData);

  })

}

module.exports = { getFruit, addFruit, getFavFruit ,deleteFruit,updateFruit};
