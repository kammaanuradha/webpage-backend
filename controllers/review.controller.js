const ReviewModel = require("../models/review.model");
const UserModel = require("../models/user.model");

async function addReview(req, res) {
  try {
    const { taskworker, rating } = req.body;
    const exist = await UserModel.findById(req.user.id);
    if (!exist)
      return res
        .status(400)
        .json({ status: 400, message: "Dont have permisson" });
    const newReview = new ReviewModel({
      taskprovider: exist._id,
      taskworker,
      rating,
    }).save();
    res
      .status(200)
      .json({ status: 200, message: "Review updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 400, message: "Server Error" });
  }
}

async function GetAllReviews(req, res) {
  try {
    const allreviews = await ReviewModel.find({taskprovider:req.user.id});
    res.status(200).json({status:200,data:allreviews});
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 400, message: "Server Error" });
  }
}

module.exports ={
    addReview,
    GetAllReviews
}