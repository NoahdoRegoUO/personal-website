import { Title, CardGrid } from "../index.ts";
import { recipeData } from "../index.ts";

function Recipes() {
  return (
    <div>
      <Title text="Recipes" />
      <hr className="mx-10 my-2 rounded border-blue-gray-600 dark:border-white" />
      <CardGrid data={recipeData} />
    </div>
  );
}

export default Recipes;
