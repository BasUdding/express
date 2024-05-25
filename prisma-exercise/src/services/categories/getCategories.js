import categoryData from "../../data/categories.json" assert { type: "json" };

const getCategories = () => {
  return categoryData.categories;
};

export default getCategories;
