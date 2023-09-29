const router = require("express").Router();
const {register,Login} = require("../controllers/auth.controller")

router.route("/register").post(register)
router.route("/login").post(Login)

module.exports = router