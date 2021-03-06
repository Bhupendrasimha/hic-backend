
const mongoose = require("mongoose");
// SCHEMA MODAL
//TODO: NEED TO SEGREGATE BASED ON USER DATA
const Schema = mongoose.Schema;

const addLinkSchema = new Schema({
    addURL: {
        type: String,
        required: true,
        //TODO:ADD UNIQUEIDS
        // unique :true,

    },
    description: {
        type: String,
        required: true,
    }
    ,
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    images: {
        type: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: true
        }
    }
}, {
    versionKey: false
}
)

module.exports = mongoose.model("AddLink", addLinkSchema)