const router =
  require("express").Router();

const {
  redirectLink,
} = require(
  "../controllers/redirectController"
);

router.get("/:shortCode", redirectLink);

module.exports = router;