const express = require("express");
const router = express.Router();
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post( processPayment);

router.route("/stripeapikey").get( sendStripeApiKey);
module.exports = router;
