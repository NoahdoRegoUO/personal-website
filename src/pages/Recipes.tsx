import { Title, CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Recipes() {
  return (
    <div>
      <Title text="Recipes" />
      <CardGrid data={projectsData} />;
    </div>
  );
}

export default Recipes;
