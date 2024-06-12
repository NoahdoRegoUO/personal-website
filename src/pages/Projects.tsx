import { Title, CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Projects() {
  return (
    <div>
      <Title text="Projects" />
      <CardGrid data={projectsData} />
    </div>
  );
}

export default Projects;
