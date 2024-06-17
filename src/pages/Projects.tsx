import { Title, CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Projects() {
  return (
    <div>
      <div className="h-8"></div>
      <Title text="Projects" />
      <CardGrid data={projectsData} />
    </div>
  );
}

export default Projects;
