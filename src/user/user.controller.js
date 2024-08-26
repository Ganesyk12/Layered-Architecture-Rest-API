// Handle request response from User
// Handle Validate User

const express = require("express");
const { getAllUsers, getUserbyID, createUser, deleteUserbyID, updateUserbyID } = require("./user.service");
const router = express.Router();

router.get("/", async (req, res) => {
   const users = await getAllUsers();
   res.send(users);
})

router.get("/:id_user", async (req, res) => {
   // const id_user = parseInt(req.params.id_user); IF id is number, then add the params in getUserbyID()
   try {
      const userId = req.params.id_user;
      const userData = await getUserbyID(userId);
      res.send(userData);
   } catch (err) {
      res.status(400).send(err.message);
   }
});

router.post("/", async (req, res) => {
   try {
      const newUserData = req.body;
      const user = await createUser(newUserData);
      res.send({
         data: user,
         message: "User Created Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
})

router.put("/:id_user", async (req, res) => {

   try {
      const userId = req.params.id_user;
      const userData = req.body;
      // validation data
      if (!(
         userData.id_user
         && userData.transaction_date
         && userData.nik
         && userData.username
         && userData.password
         && userData.role_id
         && userData.office_email
         && userData.department_code
         && userData.is_active
      )) {
         res.status(400).send({
            message: "Request data Missing",
         });
      }

      const user = await updateUserbyID(userId, userData);
      res.send({
         data: user,
         message: "User Updated Successfully",
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
})

router.patch("/:id_user", async (req, res) => {
   try {
      const userId = req.params.id_user;
      const userData = req.body;
      const user = await updateUserbyID(userId, userData);
      res.send({
         data: user,
         message: "User Updated Successfully",
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
}) // can update only 1 fields

router.delete("/:id_user", async (req, res) => {
   try {
      const userId = req.params.id_user;
      await deleteUserbyID(userId);
      res.send("User Deleted Successfully");
   } catch (error) {
      res.status(400).send(error.message);
   }
})

module.exports = router;