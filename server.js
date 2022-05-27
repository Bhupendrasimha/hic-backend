const express = require('express')
const cors = require("cors")

const addData = require("./routes/postLink")
const getData = require("./routes/getLinks")

const connectDB = require("./config/db")
const dotenv = require("dotenv")


const app = express()
const port = 8002

dotenv.config()

app.use(cors())

connectDB()

app.use(express.json())

app.use("/api", addData)
app.use("/api", getData)

app.listen(port, () => {
    console.log("Hiccup is running on port" + port)
})