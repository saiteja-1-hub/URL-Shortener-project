const axios =
  require("axios");

const suggestAliases =
  async (title) => {
    return [
      title
        .toLowerCase()
        .replace(/\s/g, "-"),
      `${title
        .toLowerCase()
        .replace(/\s/g, "-")}-2026`,
      `visit-${title
        .toLowerCase()
        .replace(/\s/g, "-")}`,
    ];
  };

module.exports = {
  suggestAliases,
};