const { Router } = require("express");
const Space = require("../models").space;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();
    res.json(spaces);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const spaceDetails = await Space.findByPk(id, {
      include: { model: Story },
    });
    res.json(spaceDetails);
    console.log(spaceDetails);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
