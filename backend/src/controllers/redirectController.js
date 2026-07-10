const Link = require("../models/Link");
const redis = require("../config/redis");

const {
  recordClick,
} = require(
  "../services/analyticsService"
);

const redirectLink = async (
  req,
  res
) => {
  try {
    const { shortCode } = req.params;

    let target =
      await redis.get(shortCode);

    let link;

    if (!target) {
      link =
        await Link.findOne({
          where: {
            shortCode,
          },
        });

      if (!link) {
        return res
          .status(404)
          .send("Link Not Found");
      }

      target = link.originalUrl;

      await redis.set(
        shortCode,
        target,
        "EX",
        3600
      );
    } else {
      link =
        await Link.findOne({
          where: {
            shortCode,
          },
        });
    }

    await recordClick(link.id, req);

    res.redirect(target);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  redirectLink,
};