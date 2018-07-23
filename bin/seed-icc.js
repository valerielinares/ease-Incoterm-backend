require ('dotenv').config();

const mongoose = require("mongoose");
//const Icc = require("../models/icc-model.js");
const Icc = require("../models/icc-model.js");

mongoose.Promise = Promise;

mongoose
  .connect("mongodb://localhost/ease-incoterm-backend", {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB for Iccs!')
  }).catch(err => {
    console.error('Error connecting to mongoDB for Iccs', err)
  });

  

const inputIcc = [ 
  {
    iccShortCode: "EXW",
    iccIndex: 1,
    iccFulName: "Ex-Works",
    iccDefinition: "Lorem Ipsum Etc 1...",
    assocLinerTerm: "Ex-Work loaded"
    },
 {
    iccShortCode: "FCA",
    iccIndex: 2,
    iccFulName: "Free Carrier",
    iccDefinition: "Lorem Ipsum Etc 2...",
    assocLinerTerm: "Uncleared"
    },
 {
    iccShortCode: "FAS",
    iccIndex: 3,
    iccFulName: "Free Alongside Ship",
    iccDefinition: "Lorem Ipsum Etc 3...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "FOB",
    iccIndex: 4,
    iccFulName: "Free On Board",
    iccDefinition: "Lorem Ipsum Etc 4...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "CFR",
    iccIndex: 5,
    iccFulName: "Cost & FReight",
    iccDefinition: "Lorem Ipsum Etc 5...",
    assocLinerTerm: ""
    },    
 {
    iccShortCode: "CIF",
    iccIndex: 6,
    iccFulName: "Cost Insurance Freight",
    iccDefinition: "Lorem Ipsum Etc 6...",
    assocLinerTerm: ""
    },   
 {
    iccShortCode: "CPT",
    iccIndex: 7,
    iccFulName: "Carriage Paid To",
    iccDefinition: "Lorem Ipsum Etc 7...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "CIP",
    iccIndex: 8,
    iccFulName: "Carriage Insurance Paid To",
    iccDefinition: "Lorem Ipsum Etc 8...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "DAT",
    iccIndex: 9,
    iccFulName: "Delivered At Terminal",
    iccDefinition: "Lorem Ipsum Etc 9...",
    assocLinerTerm: ""
    },
 {
    iccShortCode: "DAP",
    iccIndex: 10,
    iccFulName: "Delivered At Place",
    iccDefinition: "Lorem Ipsum Etc 10...",
    assocLinerTerm: ""
    },     
 {
    iccShortCode: "DDP",
    iccIndex: 11,
    iccFulName: "Delivered Duty Paid",
    iccDefinition: "Lorem Ipsum Etc 11...",
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
