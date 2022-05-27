const express = require("express")

const GetLink = require("../controllers/getLinks")

const router = express.Router()

router.get("/links", GetLink)

module.exports = router