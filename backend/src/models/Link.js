const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Link = sequelize.define(
  "Link",
  {
    title: {
      type: DataTypes.STRING
    },
    originalUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shortCode: {
      type: DataTypes.STRING,
      unique: true
    },
    customAlias: {
      type: DataTypes.STRING,
      unique: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    expiresAt: {
      type: DataTypes.DATE
    }
  }
);

module.exports = Link;