//EXPRESS FOR CRETING API'S
const express = require('express')
//CORS TO UNBLOCK CLIENT SIDE CORS ERROR
const cors = require("cors")
//POST API REFERENCE
const addData = require("./routes/postLink")
//GET DATA REFERENCE
const getData = require("./routes/getLinks")
//CREATEUSER OR REGISTER API
const createUser=require("./routes/createuser")
//MONGO DB CONNECTION
const connectDB = require("./config/db")
//ENV FILE WE CAN ADD PORT OR ANYTHING
const dotenv = require("dotenv")

const app = express()
const port = 8002

dotenv.config()

app.use(cors())

connectDB()

app.use(express.json())

//API'S
app.use("/api", addData)
app.use("/api", getData)
app.use("/api",createUser)

//PORT LISTER
//TODO: NEED TO ADD DOMAIN AND NEED TO CHANGE HTTP TO HTTPS MODULE
app.listen(port, () => {
    console.log("Hiccup is running on port" + port)
})