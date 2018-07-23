const express = require('express');
//const controller = require("./user-controller.js");
const bcrypt = require('bcrypt');

const User = require("../models/user-model.js");

const router = express.Router();

// SIGNUP
router.post("/signup", (req, res, next) => {
  console.log(req.body)
  const { firstName, lastName, company, position, email, phoneNumber, originalPassword } = req.body;

  if (!originalPassword || originalPassword.match (/[0-9]/) === null) {
    const err = new Error ("Password cannot be blank and must have a number");
    next(err);
    return;
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);
  User.create({ firstName, lastName, company, position, email, phoneNumber, encryptedPassword } )
    .then((userDoc) => {
      //log the user in immediately after signing up
      req.login(userDoc, () => {
        // hide encryptedPassword before sending the JSON (its a security risk)
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      })
    })
    .catch((err) => {
      next(err);
    });
});


// LOGIN
router.post("/login", (req, res, next) => {
  const { email, loginPassword } = req.body;

  User.findOne( { email } )
  .then((userDoc) => {
    if (!userDoc) {
      const err = new Error("Email not found");
      next(err);
      return;
    }

    const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(loginPassword, encryptedPassword)) {
        const err = new Error("Wrong passord");
        next(err);
        return;
      }
    req.logIn(userDoc, () => {
      userDoc.encryptedPassword = undefined;
      res.json({ userDoc });
    });
     
  })
   .catch((err) => {
      next(err);
   });
});

// LOGOUT
router.delete("/logout", (req, res, next) => {
  req.logOut();
  res.json({ userDoc: null });
});

// CHECK LOGIN
router.get("/checklogin", (req, res, next) => {
  if (req.user) {
    req.user.encryptedPassword = undefined;
  }
  res.json({ userDoc: req.user });
});


module.exports = router;