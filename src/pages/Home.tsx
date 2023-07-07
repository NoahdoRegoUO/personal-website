import {
  Typography,
  Progress,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

// Components
import { ContactIcons, ExperienceIcons } from "../index.ts";

// Data
import { featuredItemsData } from "../index.ts";

function Home() {
  return (
    <>
      <div className="lg:flex items-start justify-between">
        <div className="min-w-fit max-w-fit">
          <Typography variant="h1" className="ml-10 mt-5 text-6xl">
            Noah do Régo
          </Typography>
          <Typography variant="lead" className="ml-10 mt-1 text-md">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "University Student ",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
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
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </Typography>
          <div className="flex items-center gap-8 w-full justify-left ml-10 mt-5">
            <ContactIcons />
          </div>
        </div>
        <div className="max-w-full mt-5 mx-10">
          <Typography
            variant="paragraph"
            className="text-base md:text-lg lg:text-2xl"
          >
            Hey! I'm Noah- a university student with experience in full-stack
            development, game development and mobile development. I'm interested
            in AI, robotics, and modern technology in general. I'll always be
            working on one project or another, feel free to reach out!
          </Typography>
        </div>
      </div>
      <hr className="mx-10 my-5 rounded border-blue-gray-600 dark:border-white" />
      <div className="lg:flex lg:items-start lg:justify-start lg:gap-10 mx-10">
        <div>
          {/* Skills Section */}
          <Typography variant="h3" className="ml-1 text-2xl xl:text-3xl">
            Skills
          </Typography>
          <div className="justify-start">
            <div className="items-start gap-5 mb-10 lg:mb-0">
              <Typography variant="h5" className="ml-1 mt-5 text-lg md:text-xl">
                Frontend Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={80}
                size="lg"
              />
              <Typography variant="h5" className="ml-1 mt-5 text-lg md:text-xl">
                Backend Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={65}
                size="lg"
              />
              <Typography variant="h5" className="ml-1 mt-5 text-lg md:text-xl">
                Game Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={85}
                size="lg"
              />
              <Typography variant="h5" className="ml-1 mt-5 text-lg md:text-xl">
                Mobile Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={68}
                size="lg"
              />
            </div>
          </div>
          {/* Experirence Section */}
          <Typography variant="h3" className="ml-1 mt-10 text-2xl xl:text-3xl">
            Work Experience
          </Typography>
          <div className="flex items-center gap-4 w-full justify-left mt-5 mb-10 md:mb-0">
            <ExperienceIcons />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-x-5 items-center">
          {/* Featured Project */}
          <div>
            <Typography variant="h3" className="ml-1 mb-5 text-2xl xl:text-3xl">
              Featured Project
            </Typography>
            <a href={featuredItemsData.project.link} target="_blank">
              <Card className="mb-10 sm:mb-0 outline outline-1 dark:outline-0">
                <CardHeader
                  floated={false}
                  color="blue-gray"
                  className="relative"
                >
                  <img
                    className="object-cover aspect-[16/9]"
                    src={featuredItemsData.project.image}
                    alt="img-blur-shadow"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 line-clamp-1"
                  >
                    {featuredItemsData.project.title}
                  </Typography>
                  <Typography className="text-lg line-clamp-2">
                    {featuredItemsData.project.desc}
                  </Typography>
                </CardBody>
              </Card>
            </a>
          </div>
          {/* Featured Video */}
          <div>
            <Typography variant="h3" className="ml-1 mb-5 text-2xl xl:text-3xl">
              Featured Video
            </Typography>
            <a href={featuredItemsData.video.link} target="_blank">
              <Card className="mb-10 sm:mb-0 outline outline-1 dark:outline-0">
                <CardHeader
                  floated={false}
                  color="blue-gray"
                  className="relative"
                >
                  <img
                    className="object-cover aspect-[16/9]"
                    src={featuredItemsData.video.image}
                    alt="img-blur-shadow"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 line-clamp-1"
                  >
                    {featuredItemsData.video.title}
                  </Typography>
                  <Typography className="text-lg line-clamp-2">
                    {featuredItemsData.video.desc}
                  </Typography>
                </CardBody>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
