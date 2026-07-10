const Link = require("../models/Link");
const generateCode = require("../utils/base62");

const createLink = async (req, res) => {
  try {
    const {
      title,
      originalUrl,
      customAlias,
      expiresAt,
    } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        message: "Original URL is required",
      });
    }

    const shortCode =
      customAlias || generateCode();

    const exists = await Link.findOne({
      where: {
        shortCode,
      },
    });

    if (exists) {
      return res.status(409).json({
        message: "Alias already exists",
      });
    }

    const link = await Link.create({
      title,
      originalUrl,
      shortCode,
      customAlias,
      expiresAt,
    });

    res.status(201).json(link);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getLinks = async (req, res) => {
  try {
    const page =
      parseInt(req.query.page) || 1;

    const limit =
      parseInt(req.query.limit) || 10;

    const offset =
      (page - 1) * limit;

    const links = await Link.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    res.json(links);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getLink = async (req, res) => {
  try {
    const link =
      await Link.findByPk(req.params.id);

    if (!link) {
      return res.status(404).json({
        message: "Link not found",
      });
    }

    res.json(link);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateLink = async (req, res) => {
  try {
    const link =
      await Link.findByPk(req.params.id);

    if (!link) {
      return res.status(404).json({
        message: "Link not found",
      });
    }

    await link.update(req.body);

    res.json(link);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteLink = async (req, res) => {
  try {
    const link =
      await Link.findByPk(req.params.id);

    if (!link) {
      return res.status(404).json({
        message: "Link not found",
      });
    }

    await link.destroy();

    res.json({
      message: "Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  createLink,
  getLinks,
  getLink,
  updateLink,
  deleteLink,
};