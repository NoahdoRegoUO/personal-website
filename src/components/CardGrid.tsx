import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Suspense } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

function CardGrid(props: {
  data: {
    title: string;
    desc: string | undefined;
    image: string;
    link: string | undefined;
  }[];
}) {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-8 mb-10">
      {props.data.map((card) => {
        return (
          <a href={card.link} target="_blank">
            <Card
              className="bg-grey overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(125% 125% at 50% 50%, transparent 0%, grey)",
              }}
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="relative m-0 rounded-none"
              >
                <Suspense
                  fallback={
                    <div className="object-cover aspect-[16/9] bg-gray-700"></div>
                  }
                >
                  <img
                    className="object-cover aspect-[16/9]"
                    src={card.image}
                    alt="img-blur-shadow"
                  />
                </Suspense>
              </CardHeader>
              <CardBody className="h-[180px]">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 line-clamp-2 text-blue-gray-900 dark:text-gray-100 max-h-[72px]"
                >
                  {card.title}
                </Typography>
                <Typography className="text-lg xl:text-xl line-clamp-2 text-blue-gray-900 dark:text-gray-300">
                  {card.desc}
                </Typography>
              </CardBody>
            </Card>
          </a>
        );
      })}
    </div>
  );
}

export default CardGrid;
