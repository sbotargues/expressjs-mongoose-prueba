const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    name: String,
    company: String,
    role: String,
    email: String,
    password: String,
    questionLogin: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Questionlogin'}],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
