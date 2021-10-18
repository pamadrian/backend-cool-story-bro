"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Space.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
      createdAt: { type: new Date(), allowNull: false },
      updatedAt: { type: new Date(), allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Space",
    }
  );
  return Space;
};
