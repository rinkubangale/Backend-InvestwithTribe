const express = require("express");
const dbConnection = require("./src/configs/db");
const app = express();

app.use(express.json());

const userController = require("./src/controller/user.controller");

app.use("/users", userController);

const PORT = process.env.PORT || 2000;
app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Listening to ${PORT}`);
});
