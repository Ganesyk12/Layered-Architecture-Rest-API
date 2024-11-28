// Handle request response from User
// Handle Validate User

const express = require("express");
const { getAllUsers, getUserbyID, createUser, deleteUser, updateUserbyID, getUserbyRoleID, getUserbyDeptID } = require("./user.service");
const router = express.Router();

router.get("/", async (req, res) => {
   try {
      const userRole = req.query.role_id;
      const userDept = req.query.department_code;
      const userID   = req.query.id_user;
      let users;
      if (userID) {
         users = await getUserbyID(userID);
      } else if (userRole) {
         users = await getUserbyRoleID(userRole);
      } else if (userDept) {
         users = await getUserbyDeptID(userDept);
      } else {
         users = await getAllUsers();
      }
      res.send(users);
   } catch (error) {
      res.status(400).send(error.message);
   }
})

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
         return;
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
      await deleteUser(userId);
      res.send("User Deleted Successfully");
   } catch (error) {
      res.status(400).send(error.message);
   }
})

module.exports = router;