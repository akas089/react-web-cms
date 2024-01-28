const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Review = db.define(
  "review",
  {
    heading: DataTypes.STRING,
    sub_heading: DataTypes.STRING,
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    description: DataTypes.STRING,
    menu: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Review;

(async () => {
  await db.sync();
})();
