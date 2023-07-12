import { Title, CardGrid } from "../index.ts";
import { gameData } from "../index.ts";

function Games() {
  return (
    <div>
      <Title text="Games" />
      <hr className="mx-10 mb-7 rounded border-blue-gray-600 dark:border-white" />
      <CardGrid data={gameData} />
    </div>
  );
}

export default Games;
