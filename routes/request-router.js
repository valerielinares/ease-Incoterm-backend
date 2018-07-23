const express = require('express');

const Request = require("../models/request-model.js");
const User = require("../models/user-model.js");

const router = express.Router();

router.get("/user", (req, res, next) => {
  User.find()
    .then((userResults) => {
      res.json(userResults);
    })
    .catch((err) => {
      next(err);
    });
})

router.get("/user/:id", (req, res, next) => {
  const {id} = req.params;

  User.findById(id)
    .then((userDoc) => {      
      if(!userDoc) {
           next();
           return;
         }
          res.json(userDoc);
       })
       .catch((err) => {
         next(err);
       });
   });

router.post("/request", (req, res, next) => {
    const { question } = req.body;
  
    Request.create({ author: req.user._id, question })
      .then((requestDoc) => {
        res.json(requestDoc);
      })
      .catch((err) => {
        next(err);
      });
  });

module.exports = router;