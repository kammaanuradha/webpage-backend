const router = require("express").Router();
const {GetAllProfiles,GetSingleProfile} = require("../controllers/user.controller");
const { userAuth } = require("../middlewares/auth.middleware");

router.route("/AllProfiles").get(userAuth,GetAllProfiles)
router.route("/profile").get(userAuth,GetSingleProfile)

module.exports = router