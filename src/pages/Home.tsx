import { Typography, Carousel } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import { BsChevronCompactDown } from "react-icons/bs";
import { motion } from "framer-motion";

import { Title } from "../index.ts";
import headshotImage from "../assets/images/misc/headshot.png";

// Components
import { ContactIcons } from "../index.ts";

function Home() {
  return (
    <div
      className="snap-y snap-mandatory overflow-y-auto overflow-x-hidden max-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(125% 125% at 50% 0%, transparent 50%, grey)",
      }}
      id="container"
    >
      <div className="flex h-[90vh] items-center justify-center snap-start">
        {/* PHOTO */}
        <div className="w-1/4 max-w-md">
          <img
            className="rounded-full object-center"
            src={headshotImage}
            alt="headshot image"
          />
        </div>
        {/* SPACER */}
        <span style={{ width: "3vw" }} />
        {/* TITLE */}
        <div className="min-w-fit max-w-fit">
          <Typography
            variant="h1"
            className="mt-5 font-extrabold"
            style={{ fontSize: "6vw" }}
          >
            Noah do Régo
          </Typography>
          <Typography
            variant="lead"
            className="text-md font-light"
            style={{ fontSize: "3vw" }}
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
          <div className="flex items-center gap-3 sm:gap-8 max-w-full justify-left mt-[2vw]">
            <ContactIcons />
          </div>
        </div>
      </div>
      <div className="flex left-auto bottom-0 w-screen h-[10vh] justify-center">
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
      <div className="flex h-[90vh] snap-start">
        <div id="bio" className="flex items-center justify-center">
          <Typography
            variant="paragraph"
            className="text-md w-3/5 font-light"
            style={{ fontSize: "2vw" }}
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
      <div className="flex left-auto bottom-0 w-screen h-[10vh] justify-center">
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
      <div className="h-screen flex items-center justify-center snap-start">
        <div>
          <Title text="Featured Projects" />
          <hr className="mx-[50vw] w-24 mb-7 rounded border-blue-gray-600 dark:border-white" />
          <div
            id="project-gallery"
            className="flex items-center justify-center w-full"
          >
            <Carousel
              transition={{ duration: 1 }}
              className="rounded-xl w-[60vw] h-[60vh]"
            >
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
