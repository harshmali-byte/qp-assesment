// scripts/syncDatabase.ts
import sequelize from "../src/config/db";
import "../src/models/Grocery";
import "../src/models/Order";

sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Database synced successfully!");
  process.exit();
}).catch((err) => {
  console.error("❌ Failed to sync DB:", err);
  process.exit(1);
});
