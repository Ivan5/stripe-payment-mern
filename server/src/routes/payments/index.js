const { Router } = require("express");

const router = Router();

router.post("/methods/create", async (req, res) => {
  if (req.user) {
    const { id } = req.body;
    if (!id) return res.sendStatus(400);
    const { customer } = req.user.customer;
    const result = await attachPaymentMethod({
      customer: customer.stripeId,
      id,
    });
    return res.send(result);
  } else return res.sendStatus(401);
});

module.exports = router;
