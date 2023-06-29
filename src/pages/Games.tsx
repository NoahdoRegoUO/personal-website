import { Title, CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Games() {
  return (
    <div>
      <Title text="Games" />
      <CardGrid data={projectsData} />;
    </div>
  );
}

export default Games;
