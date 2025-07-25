const express = require("express")
const router = express.Router()
const enrollController = require("../controllers/enrollController")

router.post("/", enrollController.enroll)

module.exports = router
