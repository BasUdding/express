import categoriesData from "../../data/categories.json" assert { type: "json" };

const deleteCategoryById = (id) => {
  const categoryIndex = categoriesData.categories.findIndex(
    (category) => category.id === id
  );

  if (categoryIndex === -1) {
    return null;
  }

  const deletedcategory = categoriesData.categories.splice(categoryIndex, 1);

  return deletedcategory;
};

export default deleteCategoryById;
