require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const User = require("../models/user-model.js");
const User = require("../models/user-model.js");

mongoose.Promise = Promise; 

mongoose 
  .connect("mongodb://localhost/ease-incoterm-backend", {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB for users!')
  }).catch(err => {
    console.error('Error connecting to mongoDB for users', err)
  });


const inputUser = [ 
  {
    firstName: "John",
    lastName: "Doe", 
    company: "Doe & Doe Inc.",
    position: "HR Manager",
    email: "john@doe.com",
    phoneNumber: "0621062100",
    encryptedPassword: bcrypt.hashSync("9999", 10),
    role: "normal"
  },
  {
    firstName: "Admin",
    lastName: "Admin", 
    company: "Eas'Incoterm",
    position: "CEO",
    email: "adminn@admin.com",
    phoneNumber: "0621062199",
    encryptedPassword: bcrypt.hashSync("9999", 10),
    role: "admin"
  },
]


User.create(inputUser)
  .then((userResults) => {
  console.log(`Created ${userResults.length} Users in the DB`)
})
.catch((err) => {
console.log('Create Users FAIL', err)
});
