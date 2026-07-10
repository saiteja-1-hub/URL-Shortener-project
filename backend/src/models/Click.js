const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Link = require("./Link");

const Click = sequelize.define(
  "Click",
  {
    browser: DataTypes.STRING,
    operatingSystem: DataTypes.STRING,
    country: DataTypes.STRING,
    referrer: DataTypes.STRING
  }
);

Link.hasMany(Click);
Click.belongsTo(Link);

module.exports = Click;