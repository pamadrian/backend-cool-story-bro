const User = require("./models").user;
const Spaces = require("./models").space;
const Stories = require("./models").story;

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));

async function getAllSpaces() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allSpaces = await Spaces.findAll();
    return allSpaces.map((space) => space.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllSpaces().then((spaces) => console.log(spaces));

async function getAllStories() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allStories = await Stories.findAll();
    return allStories.map((story) => story.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllStories().then((stories) => console.log(stories));
