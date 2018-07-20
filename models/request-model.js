const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  question: {
    type: String,
    minlenght: 10,
    maxlength: 600,
    required: true
  },
}, { 
    timestamp: true
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;