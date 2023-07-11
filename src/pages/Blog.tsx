import { Title, CardGrid } from "../index.ts";
import { blogData } from "../index.ts";

function Blog() {
  return (
    <div>
      <Title text="Blog" />
      <hr className="mx-10 my-2 rounded border-blue-gray-600 dark:border-white" />
      <CardGrid data={blogData} />
    </div>
  );
}

export default Blog;
