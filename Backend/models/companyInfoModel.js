const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const CompanyInfo = db.define(
  "companyInfo",
  {
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    map_view: DataTypes.STRING,
    tag_line: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = CompanyInfo;

(async () => {
  await db.sync();
})();
