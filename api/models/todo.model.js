// Libraries
const { DataTypes } = require("sequelize");

// Utils
const { db } = require("../utils/database");

// Define TODO model
const Todo = db.define("todos", {
  // Define attributes
  id: {
    // Define DataTypes
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false, // NOT NULL
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Todo };
