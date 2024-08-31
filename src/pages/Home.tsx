import { Typography, Carousel } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import { BsChevronCompactDown } from "react-icons/bs";
import { motion } from "framer-motion";

import headshotImage from "../assets/images/misc/headshot.png";
import project1Image from "../assets/images/misc/sideline_background.png";
import project2Image from "../assets/images/games/terrible-taxi.png";

// Components
import { ContactIcons } from "../index.ts";

function Home() {
  return (
    <div
      className="md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden max-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, transparent 50%, grey)",
        scrollbarWidth: "none",
      }}
      id="container"
    >
      <div className="inline md:flex md:h-[90vh] h-[30vh] mt-8 md:mt-0 items-center justify-center snap-start">
        {/* PHOTO */}
        <div className="w-1/2 md:w-1/4 max-w-md ml-auto md:ml-0 mr-auto md:mr-0 mt-[10vh]">
          <img
            className="rounded-full object-center"
            src={headshotImage}
            alt="headshot image"
          />
        </div>
        {/* SPACER */}
        <span style={{ width: "3vw" }} />
        {/* TITLE */}
        <div className="min-w-fit max-w-fit ml-auto md:ml-0 mr-auto md:mr-0 mt-0 md:mt-[8vh] mb-[100px] md:mb-0">
          <Typography
            variant="h1"
            className="mt-5 font-extrabold text-[44px] md:text-[6vw]"
          >
            Noah do Régo
          </Typography>
          <Typography
            variant="lead"
            className="text-md font-light text-[22px] md:text-[3vw] text-center md:text-start"
          >
            <TypeAnimation
              sequence={[
                "University Student ",
                1500,
                "Developer ",
                1500,
                "Creator ",
                1500,
                "Writer ",
                1500,
                "Self-proclaimed dingus ",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </Typography>
          <div className="flex items-center gap-3 sm:gap-8 max-w-full justify-center md:justify-start mt-[2vw]">
            <ContactIcons />
          </div>
        </div>
      </div>
      <div className="md:flex left-auto bottom-0 w-screen h-[10vh] hidden justify-center">
        <motion.div
          style={{ cursor: "pointer" }}
          animate={{
            y: [null, -10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <BsChevronCompactDown
            className="h-[4vw] w-[4vw] text-black dark:text-white"
            onClick={() => {
              const bio_div = document.getElementById("bio");
              const container = document.getElementById("container");
              container?.scrollTo({
                top: bio_div?.offsetTop,
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>
      <div className="flex md:h-[90vh] h-[20vh] snap-start">
        <div id="bio" className="flex items-center justify-center">
          <Typography
            variant="paragraph"
            className="sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] w-4/5 lg:w-3/5 font-light text-justify mb-[100px] md:mb-0"
          >
            Hey! 👋🏽 I'm Noah- a
            <b className="font-extrabold"> computer science student</b> 👨🏽‍💻
            currently studying at the <i>University of Ottawa</i> 🏛️. I have
            experience in{" "}
            <b className="font-extrabold">full-stack development</b> 💻,{" "}
            <b className="font-extrabold">game development</b> 🎮 and more. I'm
            interested in <b className="font-extrabold">AI</b> 🧠,{" "}
            <b className="font-extrabold">robotics</b> 🦾, and{" "}
            <b className="font-extrabold">modern technology</b> 💡 in general.
            I'll always be working on one project or another, feel free to reach
            out!
          </Typography>
        </div>
      </div>
      <div className="md:flex hidden left-auto bottom-0 w-screen h-[10vh] justify-center">
        <motion.div
          style={{ cursor: "pointer" }}
          animate={{
            y: [null, -10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <BsChevronCompactDown
            className="h-[4vw] w-[4vw] text-black dark:text-white"
            onClick={() => {
              const projects_div = document.getElementById("project-gallery");
              const container = document.getElementById("container");
              container?.scrollTo({
                top: projects_div?.offsetTop,
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>
      <div className="md:h-screen h-[50vh] flex items-center justify-center snap-start">
        <div>
          <Typography
            variant="h1"
            className="font-extrabold text-center"
            style={{ fontSize: "3.5vw" }}
          >
            Featured Projects
          </Typography>
          <hr className="mx-[50vw] w-24 mb-7 rounded border-blue-gray-600 dark:border-white" />
          <div
            id="project-gallery"
            className="flex items-center justify-center w-full"
          >
            <Carousel
              transition={{ duration: 1 }}
              className="rounded-xl w-[80vw] lg:w-[60vw] md:h-[400px] lg:h-[600px] h-[300px]"
            >
              <a href="https://github.com/noah-dorego/Sideline">
                <figure className="relative h-full w-full">
                  <img
                    src={project1Image}
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 justify-center text-center bg-gray-900/50 py-4 px-6 pb-10 shadow-lg saturate-200 backdrop-blur-sm">
                    <div>
                      <Typography variant="h2" color="white">
                        Sideline
                      </Typography>
                      <Typography className="mt-2 font-normal" color="white">
                        A program that automatically generates sports highlight
                        videos
                      </Typography>
                    </div>
                  </figcaption>
                </figure>
              </a>
              <a href="https://itsdeego.itch.io/terrible-taxi">
                <figure className="relative h-full w-full">
                  <img
                    src={project2Image}
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 justify-center text-center bg-gray-900/50 py-4 px-6 pb-10 shadow-lg saturate-200 backdrop-blur-sm">
                    <div>
                      <Typography variant="h2" color="white">
                        Terrible Taxi
                      </Typography>
                      <Typography color="white" className="mt-2 font-normal">
                        A low-poly cartoonish game about being an abysmal taxi
                        driver
                      </Typography>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
