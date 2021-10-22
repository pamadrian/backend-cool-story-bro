const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const auth = require("../auth/middleware");
const User = require("../models/").user;
const Space = require("../models/").space;
const Story = require("../models/").story;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    // added include model: Space
    // need a second include because I include the story into the space, not in the user part
    const user = await User.findOne({
      where: { email },
      include: { model: Space, include: { model: Story } },
    });
    console.log(user.dataValues);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
    // added space: { ...user.space.dataValues }
    // want:
    // {
    // token: string => token
    // id: number => user.dataValues
    // email: string => user.dataValues
    // name: string => user.dataValues
    // space: {} => user.space.dataValues
    // }
    // token,
    // {...user.dataValues} (id: number, name: string, email: string),
    // space:{...user.space.dataValues}
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    console.log("==GETTING HERE?==", newUser.id);

    const space = await Space.create({
      title: `${newUser.name}'s space`,
      userId: newUser.id,
      description: null,
      backgroundColor: "#ffffff",
      color: "#000000",
    });

    console.log("space????", space);

    res.status(201).json({
      token,
      ...newUser.dataValues,
      space: {
        ...space.dataValues,
        stories: [],
      },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  // I need the space & stories
  const space = await Space.findOne({
    where: { userId: req.user.id },
    include: { model: Story },
  });
  console.log("SPACE???", space);
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues, space: space });
});

// Delete a story
router.delete("/stories/:storyId", async (req, res, next) => {
  try {
    const storyId = parseInt(req.params.storyId);
    console.log("STORYID??", storyId);
    const toDelete = await Story.findByPk(storyId);
    if (!toDelete) {
      res.status(404).send("Story not found");
    } else {
      const deleted = await toDelete.destroy();
      res.send("story is succesfully deleted");
    }
  } catch (e) {
    next(e);
  }
});

// Create story
// auth,
router.post("/:id/stories", auth, async (req, res) => {
  try {
    const space = await Space.findByPk(req.params.id);
    console.log(space);

    if (space === null) {
      return res.status(404).send({ message: "This space does not exist" });
    }

    if (!space.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }

    const { name, imageUrl, content } = req.body;

    if (!name) {
      return res.status(400).send({ message: "A story must have a name" });
    }

    const story = await Story.create({
      name,
      imageUrl,
      content,
      spaceId: space.id,
    });

    return res.status(201).send({ message: "Story created", story });
  } catch (e) {
    console.log("ERROOOR???", e);
    next(e);
  }
});

module.exports = router;
