// Handle request response from Roles
// Handle Validate Roles

const express = require("express");
const { getAllRoles, getRolebyID, createRole, updateRolebyID, deleteRolebyID } = require("./role.service");
const router = express.Router();

router.get("/", async (req, res) => {
   const roles = await getAllRoles();
   res.send(roles);
})

router.get("/:role_id", async (req, res) => {
   // const id_role = parseInt(req.params.id_role); IF id is number, then add the params in getRolebyID()
   try {
      const roleId = req.params.role_id;
      const roleData = await getRolebyID(roleId);
      res.send(roleData);
   } catch (err) {
      res.status(400).send(err.message);
   }
});

router.post("/", async (req, res) => {
   try {
      const newRoleData = req.body;
      const role = await createRole(newRoleData);
      res.send({
         data: role,
         message: "Role Created Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
});

router.put("/:role_id", async (req, res) => {
   try {
      const roleId = req.params.role_id;
      const roleData = req.body;
      // validation data
      if (!(
         roleData.role_id
         && roleData.role_name
         && roleData.transaction_date
      )) {
         res.status(400).send({
            message: "Request data Missing",
         });
      }
      const role = await updateRolebyID(roleId, roleData);
      res.send({
         data: role,
         message: "Role Updated Successfully",
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
})

router.patch("/:role_id", async (req, res) => {
   try {
      const roleId = req.params.role_id;
      const roleData = req.body;
      const role = await updateRolebyID(roleId, roleData);
      res.send({
         data: role,
         message: "Role Updated Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
})

router.delete("/:role_id", async (req, res) => {
   try {
      const roleId = req.params.role_id;
      await deleteRolebyID(roleId);
      res.send({
         message: "Role Deleted Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
})

module.exports = router;