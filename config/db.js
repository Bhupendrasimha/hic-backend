const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connections = await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex:true
        })
        console.log(`MongoDB connected: ${connections.connection.host}`)
    } catch (err) {
        console.log(`Error : ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB