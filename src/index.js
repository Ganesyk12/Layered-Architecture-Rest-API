const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json())

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
})

app.get("/api", (req, res) => {
  res.send("Hello World");
})

// MVC Routes
const userController = require("./user/user.controller");
app.use("/users", userController);

const roleController = require("./role/role.controller");
app.use("/roles", roleController);