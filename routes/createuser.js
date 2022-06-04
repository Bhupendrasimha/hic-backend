//SIGNUP API

const express = require("express")

const createUser = require("../controllers/createUser")

const router = express.Router()


router.post("/signup", createUser )

module.exports = router