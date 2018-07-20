require ('dotenv').config();

const mongoose = require("mongoose");
const Icc = require("../models/icc-model.js");

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/ease-incoterm", {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB for Iccs!')
  }).catch(err => {
    console.error('Error connecting to mongoDB for Iccs', err)
  });

  

const inputIcc = [ 
  {
    iccShortCode: "EXW",
    iccFulName: "Ex-Works",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: "Ex-Work loaded"
    },
 {
    iccShortCode: "FCA",
    iccFulName: "Free Carrier",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: "Uncleared"
    },
 {
    iccShortCode: "FAS",
    iccFulName: "Free Alongside Ship",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "FOB",
    iccFulName: "Free On Board",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "CFR",
    iccFulName: "Cost & FReight",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },    
 {
    iccShortCode: "CIF",
    iccFulName: "Cost Insurance Freight",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },   
 {
    iccShortCode: "CPT",
    iccFulName: "Carriage Paid To",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "CIP",
    iccFulName: "Carriage Insurance Paid To",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "DAT",
    iccFulName: "Delivered At Terminal",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "DAP",
    iccFulName: "Delivered At Place",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    },     
 {
    iccShortCode: "DDP",
    iccFulName: "Delivered Duty Paid",
    iccDefinition: "Lorem Ipsum Etc...",
    assocLinerTerm: ""
    }
  ]

Icc.create(inputIcc)
  .then((iccResults) => {
  console.log(`Created ${iccResults.length} ICCs in the DB`)
})
.catch((err) => {
console.log('Create ICCs FAIL', err)
});
