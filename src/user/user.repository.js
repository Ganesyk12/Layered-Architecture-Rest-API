// Communicate with Database
// ORM || Raw Query

const prisma = require("../db");

const findUser = async () => {
   const users = await prisma.a_user_system.findMany();
   return users;
}

const findUserbyID = async (id_user) => {
   const user = await prisma.a_user_system.findFirst({
      where: {
         id_user
      }
   });
   return user;
}

const findUserbyRoleID = async (role_id) => {
   const user = await prisma.a_user_system.findMany({
      where: {
         role_id: role_id,
      }
   });
   return user;
}

const findUserbyDeptID = async (department_code) => {
   const user = await prisma.a_user_system.findMany({
      where: {
         department_code: department_code,
      }
   });
   return user;
}

const insertUser = async (userData) => {
   const user = await prisma.a_user_system.create({
      data: {
         id_user: userData.id_user,
         transaction_date: userData.transaction_date,
         nik: userData.nik,
         username: userData.username,
         password: userData.password,
         role_id: userData.role_id,
         office_email: userData.office_email,
         department_code: userData.department_code,
         is_active: userData.is_active
      }
   });
   return user;
}

const editUserbyID = async (id_user, userData) => {
   const user = await prisma.a_user_system.update({
      where: {
         id_user,
      },
      data: {
         id_user: userData.id_user,
         transaction_date: userData.transaction_date,
         nik: userData.nik,
         username: userData.username,
         password: userData.password,
         role_id: userData.role_id,
         office_email: userData.office_email,
         department_code: userData.department_code,
         is_active: userData.is_active,
      },
   });
   return user;
}

const deleteUserbyID = async (id_user) => {
   await prisma.a_user_system.delete({
      where: {
         id_user,
      },
   });
}

module.exports = {
   findUser,
   findUserbyID,
   findUserbyRoleID,
   findUserbyDeptID,
   insertUser,
   editUserbyID,
   deleteUserbyID
}