//import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const testData = [
  {
    title: "Booker",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    desc: "A fullstack application for booking hotels made with a friend as a university project",
  },
  {
    title: "Booker",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    desc: "A fullstack application for booking hotels",
  },
  {
    title: "Booker",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    desc: "A fullstack application for booking hotels",
  },
  {
    title: "Booker",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    desc: "A fullstack application for booking hotels",
  },
];

function CardGrid() {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4">
      {testData.map((card) => {
        return (
          <Card className="">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="relative h-56"
            >
              <img src={card.image} alt="img-blur-shadow" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography>{card.desc}</Typography>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default CardGrid;
