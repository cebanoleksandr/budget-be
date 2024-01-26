import * as categoryService from '../services/category.service.js';

export const getAll = (req, res) => {
  const { userId } = req.params;
  const categories = categoryService.getCategoriesByUserId(userId);

  res.statusCode = 200;
  res.send(categories);
}

export const getOne = (req, res) => {
  const { id } = req.params;
  const category = categoryService.getCategoryById(id);

  if (!category) {
    res.sendStatus(404);
    return;
  }

  res.statusCode = 200;
  res.send(category);
}

export const create = (req, res) => {
  const { userId } = req.params;
  const { title, limit } = req.body;

  if (!title || !limit) {
    res.sendStatus(422);
    return;
  }

  const newCategory = categoryService.addCategory({ userId, title, limit });
  res.statusCode = 201;
  res.send(newCategory);
}

export const remove = (req, res) => {
  const { id } = req.params;

  categoryService.removeCategory(id);
  res.sendStatus(204);
}

export const update = (req, res) => {
  const { id } = req.params;
  const { limit, title } = req.body;
  const foundCategory = categoryService.getCategoryById(id);

  if (!foundCategory) {
    res.sendStatus(404);
    return;
  }

  if (!limit) {
    res.sendStatus(422);
    return;
  }

  const updatedCategory = categoryService.updateCategory(id, { limit, title });

  res.statusCode = 200;
  res.send(updatedCategory);
}
