import { v4 as uuid4 } from "uuid";

let users = [];

export const getById = (id) => {
  return users.find(u => u.id === id) || null;
}

export const getByEmailAndPassword = (email, password) => {
  const user = users.find(
    u => u.email === email && u.password === password
  ) || null;

  if (!!user) {
    user.isAuth = true;
  }

  return user;
}

export const getByEmail = (email) => {
  return users.find(
    u => u.email === email
  ) || null;
}

export const create = (
  name,
  email,
  password
) => {
  const newUser = {
    id: uuid4(),
    name,
    email,
    password,
    isAuth: true,
  }

  users.push(newUser);
  return newUser;
}

export const remove = (id) => {
  users = users.filter(u => u.id !== id);
}

export const update = (id, part) => {
  const foundUser = getById(id);

  if (!foundUser) {
    return null;
  }
  
  Object.assign(foundUser, part);
  return foundUser;
}
