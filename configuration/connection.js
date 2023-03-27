const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// create connection to our db
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST || "localhost",
  dialect: "mysql",
  port: DB_PORT || 3306,
});

module.exports = sequelize;
