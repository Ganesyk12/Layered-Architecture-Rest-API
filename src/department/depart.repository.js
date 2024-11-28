
const prisma = require("../db");

const findAllDept = async () => {
   const dept = await prisma.a_department.findMany();
   return dept;
}

const findDepartID = async (department_id) => {
   const dept = await prisma.a_department.findFirst({
      where: {
         department_id
      }
   });
   return dept;
}

const findDeptCode = async (department_code) => {
   const dept = await prisma.a_department.findMany({
      where: {
         department_code: department_code,
      }
   });
   return dept;
}

const findDeptName = async (department_name) => {
   const dept = await prisma.a_department.findMany({
      where: {
         department_name: department_name,
      }
   });
   return dept;
}

const addDepart = async (departData) => {
   const depart = await prisma.a_department.create({
      data: {
         department_id: departData.department_id,
         department_name: departData.department_name,
         department_code: departData.department_code,
         created_at: departData.created_at
      }
   });
   return depart;
}

const editDeptbyID = async (department_id, departData) => {
   const upDept = await prisma.a_department.update({
      where: {
         department_id,
      },
      data: {
         department_id: departData.department_id,
         department_name: departData.department_name,
         department_code: departData.department_code,
         created_at: departData.created_at
      },
   });
   return upDept;
}

const deleteDeptbyID = async (department_id) => {
   await prisma.a_department.delete({
      where: {
         department_id,
      },
   });
}

module.exports = {
   findAllDept,
   findDepartID,
   findDeptCode,
   findDeptName,
   addDepart,
   editDeptbyID,
   deleteDeptbyID
}