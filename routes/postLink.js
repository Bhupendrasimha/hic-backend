const express = require("express")
const { route } = require("express/lib/application")
const AddLink = require("../controllers/addLink")

const router = express.Router()

router.post("/addData", AddLink)

module.exports = router