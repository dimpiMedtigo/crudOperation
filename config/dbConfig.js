const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crudoperation", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
