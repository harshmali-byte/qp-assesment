import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Order = sequelize.define("Order", {
  items: {
    type: DataTypes.JSON, // ✅ Use JSON directly, Sequelize handles parsing
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: "Orders",
  timestamps: true // ✅ createdAt and updatedAt handled automatically
});

export default Order;
