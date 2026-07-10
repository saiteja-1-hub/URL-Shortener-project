const UAParser = require("ua-parser-js");

function parseUA(ua) {
  const parser = new UAParser(ua);

  return {
    browser: parser.getBrowser().name || "Unknown",
    os: parser.getOS().name || "Unknown"
  };
}

module.exports = parseUA;