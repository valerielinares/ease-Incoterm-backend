const express = require('express');

const Icc = require("../models/icc-model.js");

const router = express.Router();


router.get("/iccList", (req, res, next) => {
  Icc
    .find()
    .sort({iccIndex: 1})
    .then((iccResults) => {
      res.json(iccResults);
    })
    .catch((err) => {
      next(err);
    });
})

router.get("/iccList/:id", (req, res, next) => {
  const {id} = req.params;

  Icc.findById(id)
    .then((iccDoc) => {
      if(!iccDoc) {
     // show 404 if no phone was found
        next();
        return;
      }
       res.json(iccDoc);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;