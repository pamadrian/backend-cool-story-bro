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

module.exports = router;
