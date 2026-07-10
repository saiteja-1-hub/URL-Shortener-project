const Click = require("../models/Click");
const Link = require("../models/Link");

const getAnalytics = async (
  req,
  res
) => {
  try {
    const clicks =
      await Click.findAll({
        where: {
          LinkId: req.params.id,
        },
      });

    const link =
      await Link.findByPk(
        req.params.id
      );

    res.json({
      totalClicks:
        clicks.length,
      link,
      clicks,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAnalytics,
};