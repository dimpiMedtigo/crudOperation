const express = require("express");
const cors = require("cors");
const sequelize = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
