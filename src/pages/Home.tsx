import { Typography } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import { BsChevronCompactDown } from "react-icons/bs";
import { motion } from "framer-motion";
import headshotImage from "../assets/images/misc/headshot.png";

// Components
import { ContactIcons } from "../index.ts";

function Home() {
  return (
    <div
      className="snap-y snap-mandatory overflow-y-auto overflow-x-hidden max-h-screen"
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
              const pos = bio_div!.getBoundingClientRect();
              const container = document.getElementById("container");
              container?.scrollTo({ top: pos.top, behavior: "smooth" });
            }}
          />
        </motion.div>
      </div>
      <div className="flex h-screen snap-start">
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
    </div>
  );
}

export default Home;
