"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "My favorite van Gogh painting ",
          content:
            "It's called De Sterrennacht and I can stare at it for hours",
          imageUrl: "https://media.s-bol.com/VvvG41grBgp9/550x411.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "What I like most about Rembrandt's 'Bileam en zijn ezelin' painting",
          content: "The lighting is so on point, it looks angelic",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/P1150002_Cognacq-Jay_Rembrandt_anesse_de_Balaam_rwk.jpg/899px-P1150002_Cognacq-Jay_Rembrandt_anesse_de_Balaam_rwk.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "The amazing paintings of Jan Davidsz de Heem",
          content:
            "He made the most colourful but mysterious still lifes of flowers and fruits",
          imageUrl: "https://media.s-bol.com/833ZpwMXLQx5/550x548.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Johannes Vermeer and 'het Melkmeisje'",
          content:
            "Completely engrossed in her work, a maid pours milk. Except for the white beam of milk, nothing seems to move.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/1200px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
