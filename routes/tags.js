const express = require("express");
const router = express.Router();
const List = require("../model/listModel");
const slugify = require("../helpers/slugField");
const Tag = require("../model/tagModel");

const tagController = require("../controller/tagController");
router.delete("/delete/:slug", tagController.delete);

router.put("/update/:slug", tagController.update);

router.post("/create", tagController.create);

router.get("/", tagController.read);

module.exports = router;
