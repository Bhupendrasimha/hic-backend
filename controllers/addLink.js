const mongoose = require("mongoose")
const AddLink = require("../models/AddLinkSchema")
const { LogoScrape } = require('logo-scrape')

//POST THE DATA IN MEANS LINKS

const addUrlToDataBase = async (req, res) => {
    console.log(req.body)
    //TODO SEGERATE WITH CATEGORIES
    try {
        const { addURL, description, category, createdAt } = req.body;
        let logo = await LogoScrape.getLogo(addURL)
        console.log(logo)

        if (logo) {
            console.log("creating")
            await AddLink.create({
                addURL,
                description,
                category,
                createdAt,
                images: logo
            }).then((created) => {
                return res.status(200).json({
                    message: "Added to BACKEND"
                })
            })
        } else {
            return res.status(500).json("WEB SCRAPLE ERROR")
        }

    }
    catch (err) {
        return res.status(400).json({
            error: true,
            message: "Something went wrong",
            err
        })
    }
}

module.exports = addUrlToDataBase