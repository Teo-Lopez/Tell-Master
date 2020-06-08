const app_name = require("../package.json").name;
const path = require("path");

const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`);

module.exports = debug;
