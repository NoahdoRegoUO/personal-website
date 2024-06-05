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
      <div className="flex h-screen items-center justify-center">
        {/* PHOTO */}
        <div className="w-1/4 max-w-md">
          <img
            className="rounded-full object-center"
            src="src/assets/images/misc/headshot.JPG"
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
            style={{ "font-size": "6vw" }}
          >
            Noah do Régo
          </Typography>
          <Typography
            variant="lead"
            className="text-md font-light"
            style={{ "font-size": "3vw" }}
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
      {/* <div className="lg:flex lg:items-start lg:justify-start lg:gap-10 mx-10">
        <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-x-5 items-center">
          <div>
            <Typography variant="h3" className="ml-1 mb-5 text-2xl xl:text-3xl">
              Featured Project
            </Typography>
            <a href={featuredItemsData.project.link} target="_blank">
              <Card className="mb-10 sm:mb-0 outline outline-1 dark:outline-0 dark:bg-blue-gray-800 drop-shadow-2xl">
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
                    className="mb-2 line-clamp-2 text-blue-gray-900 dark:text-gray-100 h-[72px]"
                  >
                    {featuredItemsData.project.title}
                  </Typography>
                  <Typography className="text-lg line-clamp-2 text-blue-gray-900 dark:text-gray-300">
                    {featuredItemsData.project.desc}
                  </Typography>
                </CardBody>
              </Card>
            </a>
          </div>
          <div>
            <Typography variant="h3" className="ml-1 mb-5 text-2xl xl:text-3xl">
              Featured Video
            </Typography>
            <a href={featuredItemsData.video.link} target="_blank">
              <Card className="mb-10 sm:mb-0 outline outline-1 dark:outline-0 dark:bg-blue-gray-800 drop-shadow-2xl">
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
                    className="mb-2 line-clamp-2 text-blue-gray-900 dark:text-gray-300 h-[72px]"
                  >
                    {featuredItemsData.video.title}
                  </Typography>
                  <Typography className="text-lg line-clamp-2 text-blue-gray-900 dark:text-gray-300">
                    {featuredItemsData.video.desc}
                  </Typography>
                </CardBody>
              </Card>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
