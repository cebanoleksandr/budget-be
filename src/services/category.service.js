import { v4 as uuid4 } from "uuid";

let categories = [];

export const getCategoriesByUserId = (userId) => {
  return categories.filter(c => c.userId === userId);
}

export const getCategoryById = (id) => {
  return categories.find(c => c.id === id) || null;
}

export const addCategory = (category) => {
  const newCategory = {
    ...category,
    id: uuid4(),
  }

  categories.push(newCategory);
  return newCategory;
}

export const removeCategory = (id) => {
  categories = categories.filter(c => c.id !== id);
}

export const updateCategory = (id, { limit, title }) => {
  const category = getCategoryById(id);

  if (!!category) {
    category.limit = limit;
    category.title = title;
  }

  return category;
}
