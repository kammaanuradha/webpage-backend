const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
async function register(req, res) {
  try {
    const { fullname, email, mobile, skill, password, confirmpassword } =
      req.body;
    const exist = await UserModel.findOne({ email });
    if (exist)
      return res
        .status(400)
        .json({ status: 400, message: "User Already Registered" });
    if (password !== confirmpassword)
      return res.status(403).json({ status: 400, message: "Password Invalid" });

    const newUser = new UserModel({
      fullname,
      email,
      mobile,
      skill,
      password,
      confirmpassword,
    }).save();

    res.status(201).json({ status: 201, message: "User Registered" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 400, message: "Server Error" });
  }
}

async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const exist = await UserModel.findOne({ email });
    if (!exist) return res.status(400).send("User Not Exist");

    if (exist.password !== password)
      return res.status(400).send(" Password Invalid");

    let token = await jwt.sign({ id: exist._id }, "jwtPassword", {
      expiresIn: "36000000",
    });
    res.status(201).json({
      status: 201,
      message: "User Login successfully",
      data: {
        token,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 400, message: "Server Error" });
  }
}

module.exports = {
  register,
  Login,
};
