const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Footer = db.define(
  "footer",
  {
    header: DataTypes.STRING,
    list: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Footer;

(async () => {
  await db.sync();
})();
