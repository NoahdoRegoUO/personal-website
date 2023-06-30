import { Title, CardGrid } from "../index.ts";
import { Typography } from "@material-tailwind/react";
// import { projectsData } from "../index.ts";

function Recipes() {
  return (
    <div>
      <Title text="Recipes" />
      <hr className="mx-10 my-2 rounded" />
      <div className="flex items-center justify-evenly h-80">
        <Typography variant="h1" className="ml-10 mt-10 text-9xl">
          🚧
        </Typography>
        <Typography variant="h1" className="ml-10 mt-10 text-6xl">
          Working on it 😅
        </Typography>
        <Typography variant="h1" className="ml-10 mt-10 text-9xl">
          🚧
        </Typography>
      </div>
      {/*<CardGrid data={projectsData} />;*/}
    </div>
  );
}

export default Recipes;
