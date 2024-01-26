import * as authService from '../services/auth.service.js';

export const initUser = (req, res) => {
  const { id } = req.params;
  const foundUser = authService.getById(id);

  if (!foundUser || !foundUser.isAuth) {
    res.send(null);
    return;
  }

  res.statusCode = 200;
  res.send(foundUser);
}

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.sendStatus(422);
    return;
  }

  const foundUser = authService.getByEmailAndPassword(email, password);

  if (!foundUser) {
    res.send('Incorrect email or password');
    return;
  }

  res.statusCode = 200;
  res.send(foundUser);
}

export const register = (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    res.sendStatus(422);
    return;
  }

  const foundUser = authService.getByEmail(email);

  if (!!foundUser) {
    res.send('This email is already taken');
    return;
  }

  const newUser = authService.create(name, email, password);

  res.statusCode = 201;
  res.send(newUser);
}

export const remove = (req, res) => {
  const { id } = req.params;

  authService.remove(id);
  res.sendStatus(204);
}

export const update = (req, res) => {
  const { id } = req.params;
  const { userPart } = req.body;

  if (!userPart) {
    res.sendStatus(422);
    return;
  }

  const updatedUser = authService.update(id, userPart);

  if (!updatedUser) {
    res.sendStatus(404);
    return;
  }

  res.statusCode = 200;
  res.send(updatedUser);
}
