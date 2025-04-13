import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Grocery = sequelize.define("Grocery", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

export default Grocery;
