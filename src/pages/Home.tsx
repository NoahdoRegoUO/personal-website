import { Typography } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="min-w-fit">
          <Typography variant="h1" className="ml-10 mt-10 text-6xl">
            Noah do Régo
          </Typography>
          <Typography variant="lead" className="ml-10 mt-5 text-md">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "University Student ",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "Developer ",
                1500,
                "Designer ",
                1500,
                "Writer ",
                1500,
                "Self-proclaimed dingus ",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </Typography>
        </div>
        <div className="max-w-4xl mt-10 mx-10">
          <Typography
            variant="paragraph"
            className="text-base md:text-lg lg:text-2xl"
          >
            Hey! I'm Noah- a university student interested in full-stack
            development, game development, AI and pretty much all aspects of
            modern technology. I'll always be working on one project or another,
            feel free to reach out!
          </Typography>
        </div>
      </div>
      <hr className="mx-10 my-5 rounded" />
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
    </>
  );
}

export default Home;
