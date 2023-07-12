import { Typography } from "@material-tailwind/react";

function Title(props: { text: string }) {
  return (
    <div className="w-fill mx-10 mt-7 mb-5">
      <Typography variant="h1" className="text-center text-4xl lg:text-5xl">
        {props.text}
      </Typography>
    </div>
  );
}

export default Title;
