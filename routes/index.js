const router = require("express").Router();
const AuthRoute = require("./auth.route");
const UserRoute = require("./user.route")
const ReviewRoute = require("./review.route")


router.use("/auth",AuthRoute);
router.use("/user",UserRoute);
router.use("/review",ReviewRoute)
module.exports = router