import categoriesData from "../../data/categories.json" assert { type: "json" };

const getCategoryById = (id) => {
  return categoriesData.categories.find((category) => category.id === id);
};

export default getCategoryById;
