const { Router } = require("express");
const { route } = require("./auth");
const authRoutes = require("./auth");
const paymentsRoutes = require("./payments");

const router = Router();

router.use("/auth", authRoutes);
route.use("/payments", paymentsRoutes);

module.exports = router;
