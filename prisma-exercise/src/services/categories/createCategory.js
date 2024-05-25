import { v4 as uuidv4 } from "uuid";
import categoryData from "../../data/categories.json" assert { type: "json" };

const createCategory = (name) => {
  const newCategory = {
    id: uuidv4(),
    name,
  };

  categoryData.categories.push(newCategory);

  return newCategory;
};

export default createCategory;
