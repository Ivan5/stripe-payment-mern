const { Router } = require("express");

const router = Router();

router.get("/status", (req, res) => {
  res.send(200);
});

// api/auth/discord
router.get("/discord", (req, res) => {});

// api/auth/discord/redirect
router.get("/discord/redirect", (req, res) => {});

module.exports = router;
