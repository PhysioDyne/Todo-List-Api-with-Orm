const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./data/db");
const testData = require("./data/test-data");
const Tag = require("./model/tagModel");
const List = require("./model/listModel");
require("dotenv").config();
const listRoutes = require("./routes/list");
const tagRoutes = require("./routes/tags");

app.use("/static", express.static("/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(listRoutes);
app.use("/tags", tagRoutes);

Tag.belongsToMany(List, { through: "listtag" });
List.belongsToMany(Tag, { through: "listtag" });
(async () => {
  await sequelize.sync({ force: true });
  await testData();
})();
app.listen(process.env.PORT);
