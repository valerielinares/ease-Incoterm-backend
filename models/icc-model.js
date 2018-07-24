const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const iccSchema = new Schema({
  iccShortCode: {type: String, required: true, unique: true},
  iccIndex: {type: Number, required: true, unique: true},
  iccFulName: {type: String, required: true, unique: true},
  iccDefinition: {type: String, required: true, unique: true},
  assocLinerTerm: {type: String, required: false, unique: false}
},{
  timestamps: true
});

const Icc = mongoose.model("Icc", iccSchema);

module.exports = Icc;