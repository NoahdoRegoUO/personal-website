import { Typography, IconButton } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import { FiGithub } from "react-icons/fi";
import {
  FaMediumM,
  FaYoutube,
  FaItchIo,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="md:flex items-start justify-between">
        <div className="min-w-fit">
          <Typography variant="h1" className="ml-10 mt-5 text-6xl">
            Noah do Régo
          </Typography>
          <Typography variant="lead" className="ml-10 text-md">
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
          <div className="flex items-center gap-8 w-full justify-left ml-10 mt-5">
            <a href="https://github.com/NoahdoRegoUO" target="_blank">
              <IconButton className="rounded-full scale-[1.3] bg-[#000000] shadow-none">
                <FiGithub className="h-[18px] w-[18px]" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/noah-do-rego/" target="_blank">
              <IconButton className="rounded-full scale-[1.3] bg-[#3f7bdd] shadow-none">
                <FaLinkedinIn className="h-[18px] w-[18px]" />
              </IconButton>
            </a>
            <a href="https://www.youtube.com/@its_deego" target="_blank">
              <IconButton className="rounded-full scale-[1.3] bg-[#c4302b] shadow-none">
                <FaYoutube className="h-[18px] w-[18px]" />
              </IconButton>
            </a>
            <a href="https://noah-dorego.medium.com/" target="_blank">
              <IconButton className="rounded-full scale-[1.3] bg-[#000000] shadow-none">
                <FaMediumM className="h-[18px] w-[18px]" />
              </IconButton>
            </a>
            <a href="mailto:noah.dorego@gmail.com" target="_blank">
              <IconButton className="rounded-full scale-[1.3] bg-[#6080ca] shadow-none">
                <FaEnvelope className="h-[18px] w-[18px]" />
              </IconButton>
            </a>
            <a href="https://itsdeego.itch.io/" target="_blank">
              <IconButton className="rounded-full scale-[1.3] bg-[#d1604c] shadow-none">
                <FaItchIo className="h-[18px] w-[18px]" />
              </IconButton>
            </a>
          </div>
        </div>
        <div className="max-w-3xl mt-5 mx-10">
          <Typography
            variant="paragraph"
            className="text-base md:text-lg lg:text-3xl"
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
