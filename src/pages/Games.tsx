import { Title, CardGrid } from "../index.ts";
import { gameData } from "../index.ts";

function Games() {
  return (
    <div>
      <Title text="Games" />
      <hr className="mx-10 my-2 rounded border-blue-gray-600 dark:border-white" />
      <CardGrid data={gameData} />
    </div>
  );
}

export default Games;
