// Communicate with Database
// ORM || Raw Query

const prisma = require("../db");

const findRole = async () => {
   const roles = await prisma.a_user_role.findMany();
   return roles;
}

const findRolebyID = async (role_id) => {
   const role = await prisma.a_user_role.findFirst({
      where: {
         role_id
      }
   });
   return role;
}

const insertRole = async (roleData) => {
   const role = await prisma.a_user_role.create({
      data: {
         role_id: roleData.role_id,
         role_name: roleData.role_name,
         transaction_date: roleData.transaction_date
      }
   });
   return role;
}

const editRolebyID = async (role_id, roleData) => {
   const roleId = await prisma.a_user_role.update({
      where: {
         role_id,
      },
      data: {
         role_id: roleData.role_id,
         role_name: roleData.role_name,
         transaction_date: roleData.transaction_date,
      },
   });
   return roleId;
}

const deleteRole = async (role_id) => {
   await prisma.a_user_role.delete({
      where: {
         role_id,
      },
   });
}

module.exports = {
   findRole,
   findRolebyID,
   insertRole,
   editRolebyID,
   deleteRole
}