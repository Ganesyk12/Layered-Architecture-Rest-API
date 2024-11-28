// Handle Bussiness Logic
// Reusable

const { findRole, findRolebyID, insertRole, editRolebyID, deleteRole } = require("./role.repository");

const getAllRoles = async () => {
   const roles = await findRole();
   return roles;
}

const getRolebyID = async (role_id) => {
   const role = await findRolebyID(role_id);
   if (!role) {
      throw Error("Role Not Found");
   }
   return role;
}

const createRole = async (roleData) => {
   const role = await insertRole(roleData);
   return role;
}

const updateRolebyID = async (role_id, roleData) => {
   await findRolebyID(role_id);
   const roleId = await editRolebyID(role_id, roleData);
   return roleId;
}

const deleteRolebyID = async (role_id) => {
   await findRolebyID(role_id);
   await deleteRole(role_id);
}

module.exports = {
   getAllRoles,
   getRolebyID,
   createRole,
   updateRolebyID,
   deleteRolebyID
}