const passport = require("passport");

const User = require("../models/user-model.js");

// save user data in the session
passport.serializeUser((userDoc, done) => {
  // save the user's ID inside the sesion
  done(null, userDoc._id);
});

// 
passport.deserializeUser((idFromSession, done) => {
  User.findById(idFromSession)
    .then((userDoc) => {
      done(null, userDoc);
    })
    .catch((err) => {
      done(err);
    })
});

function passportSetup (app) {// receive as a parameter the app from the app.js file
  app.use(passport.initialize());
  app.use(passport.session());
}


module.exports = passportSetup;
