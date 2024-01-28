const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Menu = db.define(
  "menu",
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    _menu: DataTypes.STRING,
    _parentId: DataTypes.INTEGER,
    _slug: DataTypes.STRING,
    _sort: DataTypes.INTEGER,
    _active: DataTypes.TINYINT,
    _isTitle: DataTypes.TINYINT,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Menu;

(async () => {
  await db.sync();
})();
