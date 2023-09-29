 const UserModel = require("../models/user.model")
 async function GetAllProfiles (req, res) {
  try {
    let allprofiles = await UserModel.find({});
    res.status(200).json({status:200,data:allprofiles});
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 400, message: "Server Error" });
  }
};

 async function GetSingleProfile(req, res)  {
        console.log(req.user);
  try {
    const user = await UserModel.findById(req.user.id);
    return res.status(200).json({status:200,data:user});
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 400, message: "Server Error" });
  }
};


module.exports ={
    GetAllProfiles,GetSingleProfile
}