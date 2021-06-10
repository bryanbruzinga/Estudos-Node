const Sequelize = require("sequelize");

const sequelize = new Sequelize("postapp", "root", "461905bB", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
