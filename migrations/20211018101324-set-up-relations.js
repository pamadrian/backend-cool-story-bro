"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Stories", "spaceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Spaces",
        key: "id",
      },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Spaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Spaces",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Stories", "spaceId");
    await queryInterface.removeColumn("Spaces", "userId");
  },
};
