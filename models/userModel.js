const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    sex: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
    createdAt: "dateOfRegistration",
    updatedAt: false,
  }
);

module.exports = User;
