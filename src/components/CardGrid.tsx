import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import bookerImage from "../assets/images/projects/booker.png";
import onedayImage from "../assets/images/projects/oneday.png";
import trendImage from "../assets/images/projects/trend.jpg";
import personalWebsiteImage from "../assets/images/projects/personal-website.jpg";

const testData = [
  {
    title: "OneDay",
    image: onedayImage,
    desc: "A minimalist, simplified daily planner app made with React Native",
  },
  {
    title: "Booker",
    image: bookerImage,
    desc: "A fullstack application for booking hotels made with a friend as a university project",
  },
  {
    title: "Trend",
    image: trendImage,
    desc: "A mobile app that displays trending content from other platforms made with React Native",
  },
  {
    title: "Personal Website",
    image: personalWebsiteImage,
    desc: "My personal website (yes, this one) made with Vite + React, Tailwind CSS",
  },
];

function CardGrid() {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4">
      {testData.map((card) => {
        return (
          <Card className="">
            <CardHeader floated={false} color="blue-gray" className="relative">
              <img
                className="object-cover aspect-[6/4]"
                src={card.image}
                alt="img-blur-shadow"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography className="text-lg">{card.desc}</Typography>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default CardGrid;
