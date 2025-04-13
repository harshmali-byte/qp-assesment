import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
dotenv.config();
const app = express();
app.use(express.json());


app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);


sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
export default app;




