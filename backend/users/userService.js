// Service: Define functions that can be called
// If get all userss had to be updated to be R18+ content restricted, the controller would not need to be updated
// We would only need to update the service
// Router => Location endpoint aka /users /user:id. Does not know what happens just where
// Controller => Takes in response, calls service, sends response back. Does not know what happens.
// Service => Logic of what happens / what to do. Does not know where it is called.
// Dal => Data Access Layer. Interacts with the database in one location.
// Model => Creates a model (aka folder) for the database. Does not know what the structure is (schema does that).
// Schema => Outlines the structure of the data

import {
  getUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
  searchUsers,loginUser
} from './userDal.js';
import { signToken } from '../utils/auth.js';

export async function getUsersService() {
  return await getUsers();
}

export async function getUserByIdService(id) {
  return await getUserById(id);
}

export async function updateUserService(id, user) {
  return await updateUser(id, user);
}

export async function createUserService(user) {
  const createdUser = await createUser(user);
  if (!createdUser) {
    return null;
  }
  const token = await signToken(
    createdUser.name,
    createdUser.email,
    createdUser._id
  );

  return {
    user,
    token,
  };
}

export async function loginUserService(email, password) {
  const user = await loginUser(email, password);
  if (!user) {
    return null;
  }
  const token = await signToken(user.name, user.email, user._id);
  return {
    user,
    token,
  };
}

export async function deleteUserService(id) {
  return await deleteUser(id);
}

export async function searchUsersService(name, id) {
  return await searchUsers(name, id);
}
