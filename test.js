const encrypt = require("./script");

const secretKey = "my_secret_key";
const payload = { id: 1, name: "Alice" };

const token = encrypt(payload, secretKey);
console.log("Generated Token:", token);