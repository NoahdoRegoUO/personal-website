import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function CardGrid(props: {
  data: {
    title: string;
    desc: string;
    image: string;
    link: string | undefined;
  }[];
}) {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-8">
      {props.data.map((card) => {
        return (
          <a href={card.link} target="_blank">
            <Card className="outline outline-1 dark:outline-0">
              <CardHeader
                floated={false}
                color="blue-gray"
                className="relative"
              >
                <img
                  className="object-cover aspect-[16/9]"
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
          </a>
        );
      })}
    </div>
  );
}

export default CardGrid;
