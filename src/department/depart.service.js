
const { findAllDept, findDepartID, findDeptCode, findDeptName, addDepart, editDeptbyID, deleteDeptbyID } = require("./depart.repository");

const getAllDepartment = async () => {
   const departmenId = await findAllDept();
   return departmenId;
}

const getDeptbyID = async (department_id) => {
   const depart = await findDepartID(department_id);
   if (depart.length === 0) {
      throw Error("Department Not Found");
   }
   return depart;
}

const getDeptbyCode = async (department_code) => {
   const Department = await findDeptCode(department_code);
   if (!Department) {
      throw Error("Department Not Found");
   }
   return Department;
}

const getDeptbyName = async (department_name) => {
   const dept = await findDeptName(department_name);
   if (!dept) {
      throw Error("Department Not Found");
   }
   return dept;
}

const createDept = async (departData) => {
   const depart = await addDepart(departData);
   return depart;
}

const updateDepartbyID = async (department_id, departData) => {
   await getDeptbyID(department_id);
   const depart = await editDeptbyID(department_id, departData);
   return depart;
}

const deleteDept = async (department_id) => {
   await getDeptbyID(department_id);
   await deleteDeptbyID(department_id);
}

module.exports = {
   getAllDepartment,
   getDeptbyID,
   getDeptbyCode,
   getDeptbyName,
   createDept,
   updateDepartbyID,
   deleteDept
}
