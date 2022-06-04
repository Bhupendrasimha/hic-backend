//GET DATA API

const express = require("express")

const GetLink = require("../controllers/getLinks")
const checkIfAuthenticated =require("../middleware/auth")
const router = express.Router()

router.get("/links",checkIfAuthenticated, GetLink)

module.exports = router