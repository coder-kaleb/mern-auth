const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// token gen
const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "3d" });
};
const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginuser, signupuser };
