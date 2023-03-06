const express = require("express");
const router = express.Router();
const List = require("../model/listModel");
const slugify = require("../helpers/slugField");
const Tag = require("../model/tagModel");
const { Op } = require("sequelize");
const listController = require("../controller/listController");
router.put("/update/:slug", listController.update);

router.delete("/delete/:slug", listController.delete);

router.post("/create", listController.create);

router.get("/details/:url", listController.details);

router.get("/", listController.read);

module.exports = router;
