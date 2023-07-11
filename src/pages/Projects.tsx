import { Title, CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Projects() {
  return (
    <div>
      <Title text="Projects" />
      <hr className="mx-10 my-2 rounded border-blue-gray-600 dark:border-white" />
      <CardGrid data={projectsData} />
    </div>
  );
}

export default Projects;
