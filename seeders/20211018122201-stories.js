"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Stories",
      [
        {
          name: "My favorite van Gogh painting ",
          content:
            "It's called De Sterrennacht and I can stare at it for hours",
          imageUrl:
            "https://artsandculture.google.com/asset/the-starry-night/bgEuwDxel93-Pg?utm_source=google&utm_medium=kp&hl=nl&avm=2",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "What I like most about Rembrandt's 'Bileam en zijn ezelin' painting",
          content: "The lighting is so on point, it looks angelic",
          imageUrl:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnl.wikipedia.org%2Fwiki%2FBileam&psig=AOvVaw0-TfGWyVx9xUICnUovyJua&ust=1634644149016000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjByZDy0_MCFQAAAAAdAAAAABAD",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "The amazing paintings of Jan Davidsz de Heem",
          content:
            "He made the most colourful but mysterious still lifes of flowers and fruits",
          imageUrl: "https://www.rijksmuseum.nl/nl/collectie/SK-A-138",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Johannes Vermeer and 'het Melkmeisje'",
          content:
            "Completely engrossed in her work, a maid pours milk. Except for the white beam of milk, nothing seems to move.",
          imageUrl: "https://www.rijksmuseum.nl/nl/collectie/SK-A-2344",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Stories", null, {});
  },
};
