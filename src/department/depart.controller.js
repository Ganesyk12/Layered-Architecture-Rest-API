const express = require("express");
const { getAllDepartment, getDeptbyID, getDeptbyCode, getDeptbyName, createDept, updateDepartbyID, deleteDept } = require("./depart.service");
const router = express.Router();

router.get("/", async (req, res) => {
   try {
      const deptID   = req.query.department_id;
      const deptCode = req.query.department_code;
      const deptName   = req.query.department_name;
      let depart;
      if (deptID) {
         depart = await getDeptbyID(deptID);
      } else if (deptCode) {
         depart = await getDeptbyCode(deptCode);
      } else if (deptName) {
         depart = await getDeptbyName(deptName);
      } else {
         depart = await getAllDepartment();
      }
      res.send(depart);
   } catch (err) {
      res.status(400).send(err.message);
   }
})

router.post("/", async (req, res) => {
   try {
      const newDepartData = req.body;
      const departs = await createDept(newDepartData);
      res.send({
         data: departs,
         message: "Departments Created Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
});

router.put("/:department_id", async (req, res) => {
   try {
      const departmenId = req.params.department_id;
      const departmentData = req.body;
      // validation data
      if (!(
         departmentData.department_id
         && departmentData.department_code
         && departmentData.department_name
         && departmentData.created_at
      )) {
         res.status(400).send({
            message: "Request data Missing",
         });
      }
      const department = await updateDepartbyID(departmenId, departmentData);
      res.send({
         data: department,
         message: "Department Updated Successfully",
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
})

router.patch("/:department_id", async (req, res) => {
   try {
      const departmenId = req.params.department_id;
      const departData = req.body;
      const dept = await updateDeptbyID(departmenId, departData);
      res.send({
         data: dept,
         message: "Role Updated Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
})

router.delete("/:department_id", async (req, res) => {
   try {
      const departmenId = req.params.department_id;
      await deleteDeptbyID(departmenId);
      res.send({
         message: "Department Deleted Successfully",
      })
   } catch (error) {
      res.status(400).send(error.message);
   }
})

module.exports = router;