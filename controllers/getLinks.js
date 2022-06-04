const AddLink = require("../models/AddLinkSchema")

//GET DATA BASED ON USER NEED TO CHANGE THE DATA BASE LOGIC TO CHANGE AS USER VALUES
const getLinksData = async (req, res) => {

    if (req.query.page) {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit
        const results = {}
        results.next = {
            page: page + 1,
            limit: limit
        }

        results.prev = {
            page: page - 1,
            limit: limit
        }
        if (req.query.category) {
            AddLink.find({ category: req.query.category })
                .then((links) => {
                    results.length = links.length;
                    results.current = links.slice(startIndex, endIndex)
                    res.status(200).json(results)
                })
                .catch((err) => res.status(404).json({ ERROR: "Category is not defined" + err }))
        } else {
            AddLink.find()
                .then((links) => {
                    results.length = links.length;
                    results.current = links.slice(startIndex, endIndex)
                    res.status(200).json(results)
                })
                .catch((err) => res.status(500).json("ERROR" + err))
        }

    } else {
        AddLink.find()
            .then((links) => res.status(200).json(links))
            .catch((err) => res.status(400).json("Error:", err))
    }
}

module.exports = getLinksData