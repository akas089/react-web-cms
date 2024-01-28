const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Counter = db.define(
  "counter",
  {
    heading: DataTypes.STRING,
    sub_heading: DataTypes.STRING,
    count: DataTypes.INTEGER,
    title: DataTypes.STRING,
    sub_title: DataTypes.STRING,
    menu: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Counter;

(async () => {
  await db.sync();
})();
