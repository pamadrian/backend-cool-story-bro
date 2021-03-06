"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "About Lighting and the skies",
          description:
            "Take a good look at these paintings and the way the artist made use of light to create the sky and the surroundings",
          backgroundColor: "#DAF5FF",
          color: "#00000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Still lifes",
          description: "Like the world is standing still for a moment.",
          backgroundColor: "#8B9D83",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
