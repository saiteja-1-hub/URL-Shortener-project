const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateCode(length = 6) {
  let code = "";

  for (let i = 0; i < length; i++) {
    code += alphabet[
      Math.floor(Math.random() * alphabet.length)
    ];
  }

  return code;
}

module.exports = generateCode;