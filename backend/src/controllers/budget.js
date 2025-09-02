"use strict"

const Budget = require("../models/budget")

module.exports = {
      list: async (req, res) => {
   
    
    const data = await res.getModelList(Budget);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Budget),
      data,
    });
  },

  create: async (req, res) => {
 
  const data = await Budget.create(req.body)

    res.status(201).send({
      error: false,
       message: "Budget data added successfully",
      data
    });
  },

  read: async (req, res) => {
   

    const data = await Budget.findOne({ _id: req.params.budgetId });
    

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
   
    const data = await Budget.updateOne({ _id: req.params.budgetId }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Budget.findOne({ _id: req.params.budgetId }),
    });
  },

  delete: async (req, res) => {
   const data = await Budget.updateOne({ _id: req.params.budgetId }, { isDeleted: true });
      
    res.status(200).send({  
      error: false, 
      message: "Budget related part deleted successfully",
      data, 
    });

    
  },
   

}