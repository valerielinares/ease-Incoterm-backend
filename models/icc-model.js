const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const iccSchema = new Schema({
  iccShortCode: {type: String, required: true},
  iccFulName: {type: String, required: true},
  iccDefinition: {type: String, required: true},
  assocLinerTerm: {type: String, required: false}
},{
  timestamps: true
});

const Icc = mongoose.model("Icc", iccSchema);

module.exports = Icc;