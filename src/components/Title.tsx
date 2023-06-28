import { Typography } from "@material-tailwind/react";

function Title(props: { text: string }) {
  return (
    <div className="w-fill m-10">
      <Typography variant="h1" className="text-center text-4xl lg:text-5xl">
        {props.text}
      </Typography>
    </div>
  );
}

export default Title;
