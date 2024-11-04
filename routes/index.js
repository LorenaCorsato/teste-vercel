const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("base", {
        title: "Home",
        view: "index"
    });
});

router.get("/quemsomos", (req, res) => {
    res.render("base", {
        title: "Quem Somos",
        view: "quemsomos"
    });
});

module.exports = router;
