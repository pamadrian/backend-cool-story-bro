const { Router } = require("express");
const Space = require("../models").space;

const router = new Router();

router.get("/spaces", async (req, res, next) => {
  try {
    const spaces = await Space.findAll();
    res.json(spaces);
  } catch (e) {
    next(e);
  }
});

router.get("/spaces/:id", async (req, res, next) => {
  try {
    const spacesdetails = await Space.findByPk();
    res.json(spacesdetails);
    console.log(spacesdetails);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
