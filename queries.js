const { user, space, story } = require("./models");

// spaces with their users
async function listsWithUsers() {
  const lists = await space.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });
  return lists.map((list) => list.toJSON());
}

listsWithUsers().then((lists) => console.log(lists));

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await user.findAll();
    return allUsers.map((usert) => usert.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));

async function getAllSpaces() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allSpaces = await space.findAll();
    return allSpaces.map((spacert) => spacert.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllSpaces().then((spaces) => console.log(spaces));

async function getAllStories() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allStories = await story.findAll();
    return allStories.map((storyt) => storyt.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllStories().then((stories) => console.log(stories));
