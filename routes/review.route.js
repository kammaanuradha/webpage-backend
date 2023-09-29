const router = require("express").Router();
const {GetAllReviews,addReview} = require("../controllers/review.controller");
const { userAuth } = require("../middlewares/auth.middleware");

router.route("/").get(userAuth,GetAllReviews)
router.route("/").post(userAuth,addReview)

module.exports = router