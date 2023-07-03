import {
  Typography,
  Progress,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

// Components
import { ContactIcons } from "../index.ts";

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
            <ContactIcons />
          </div>
        </div>
        <div className="max-w-full mt-5 mx-10">
          <Typography
            variant="paragraph"
            className="text-base md:text-lg lg:text-2xl xl:text-3xl"
          >
            Hey! I'm Noah- a university student with experience in full-stack
            development, game development and mobile development. I'm interested
            in AI, robotics, and modern technology in general. I'll always be
            working on one project or another, feel free to reach out!
          </Typography>
        </div>
      </div>
      <hr className="mx-10 my-5 rounded" />
      <div className="lg:flex lg:items-start lg:justify-start lg:gap-10 mx-10">
        <div>
          <Typography variant="h2" className="ml-1">
            Skills
          </Typography>
          <div className="justify-start">
            <div className="items-start gap-5 mb-10 lg:mb-0">
              <Typography variant="h5" className="ml-1 mt-5">
                Frontend Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={80}
                size="lg"
              />
              <Typography variant="h5" className="ml-1 mt-5">
                Backend Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={65}
                size="lg"
              />
              <Typography variant="h5" className="ml-1 mt-5">
                Game Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={85}
                size="lg"
              />
              <Typography variant="h5" className="ml-1 mt-5">
                Mobile Development
              </Typography>
              <Progress
                className="lg:w-[35vw] mt-2 bg-blue-gray-600"
                value={55}
                size="lg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-5">
          {/* Featured Project */}
          <Card className="">
            <CardHeader floated={false} color="blue-gray" className="relative">
              <img
                className="object-cover aspect-[6/4]"
                src={featuredItemsData.project.image}
                alt="img-blur-shadow"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {featuredItemsData.project.title}
              </Typography>
              <Typography className="text-lg">
                {featuredItemsData.project.desc}
              </Typography>
            </CardBody>
          </Card>
          {/* Featured Video */}
          <Card className="">
            <CardHeader floated={false} color="blue-gray" className="relative">
              <img
                className="object-cover aspect-[6/4]"
                src={featuredItemsData.project.image}
                alt="img-blur-shadow"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {featuredItemsData.project.title}
              </Typography>
              <Typography className="text-lg">
                {featuredItemsData.project.desc}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
