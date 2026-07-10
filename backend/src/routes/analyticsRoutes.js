const router =
  require("express").Router();

const {
  getAnalytics,
} = require(
  "../controllers/analyticsController"
);

router.get("/:id", getAnalytics);

module.exports = router;