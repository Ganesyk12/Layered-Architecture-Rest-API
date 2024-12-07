const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.listen(PORT, () => {
  console.log("Express API running in port: " + PORT);
})

app.get("/", (req, res) => {
  res.send("welcome to express API");
  res.status(200);
})

// MVC Routes
const userController = require("./user/user.controller");
app.use("/users", userController);

const roleController = require("./role/role.controller");
app.use("/roles", roleController);

const deptController = require("./department/depart.controller");
app.use("/department", deptController);