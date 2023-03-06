const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected!");
  } catch (error) {
    console.log("Database Error", error);
  }
})();

module.exports = sequelize;
