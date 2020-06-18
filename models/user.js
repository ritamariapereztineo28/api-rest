const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  phone: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, select: false },
  signupDate: { type: Date, select: false },
});

userSchema.pre("save", () => {
  let user = this;
  if (user.exists){
      console.log(user, "Bienvenido/a !")
  }
 console.log("Usuario ya existe !")
});

module.exports = mongoose.model("Users", userSchema);
