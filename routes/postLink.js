//POST API
const express = require("express")

const AddLink = require("../controllers/addLink")
const checkIfAuthenticated  = require("../middleware/auth")

const router = express.Router()

router.post("/addData",checkIfAuthenticated, AddLink)

module.exports = router