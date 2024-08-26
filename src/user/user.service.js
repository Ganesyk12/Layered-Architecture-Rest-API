// Handle Bussiness Logic
// Reusable
const { findUser, findUserbyID, insertUser, editUserbyID } = require("./user.repository");

const getAllUsers = async () => {
   const users = await findUser();
   return users;
}

const getUserbyID = async (id_user) => {
   const user = await findUserbyID(id_user);
   if (!user) {
      throw Error("User Not Found");
   }
   return user;
}

const createUser = async (userData) => {
   const user = await insertUser(userData);
   return user;
}

const updateUserbyID = async (id_user, userData) => {
   await getUserbyID(id_user);
   const user = await editUserbyID(id_user, userData);
   return user;
}

const deleteUserbyID = async (id_user) => {
   await getUserbyID(id_user);
   await deleteUserbyID(id_user);
}

module.exports = {
   getAllUsers,
   getUserbyID,
   createUser,
   deleteUserbyID,
   updateUserbyID
}