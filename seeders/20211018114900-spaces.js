"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Spaces",
      [
        {
          title: "About Lighting and the skies",
          description:
            "Take a good look at these paintings and the way the artist made use of light to create the sky and the surroundings",
          backgroundColor: "#ffffff",
          color: "#00000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          title: "Still lifes I adore",
          description: "Like the world is standing still for a moment.",
          backgroundColor: "#ffffff",
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
    await queryInterface.bulkDelete("Spaces", null, {});
  },
};
