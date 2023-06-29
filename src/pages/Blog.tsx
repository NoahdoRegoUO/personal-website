import { Title, CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Blog() {
  return (
    <div>
      <Title text="Blog" />
      <CardGrid data={projectsData} />;
    </div>
  );
}

export default Blog;
