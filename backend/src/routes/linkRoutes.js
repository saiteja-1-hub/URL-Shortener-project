const router =
  require("express").Router();

const {
  createLink,
  getLinks,
  getLink,
  updateLink,
  deleteLink,
} = require(
  "../controllers/linkController"
);

router.post("/", createLink);
router.get("/", getLinks);
router.get("/:id", getLink);
router.put("/:id", updateLink);
router.delete("/:id", deleteLink);

module.exports = router;