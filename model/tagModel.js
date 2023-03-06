const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Tag = sequelize.define("tag", {
  tagname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Tag;
