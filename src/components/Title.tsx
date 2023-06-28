import { Typography } from "@material-tailwind/react";

function Title(props: { text: string }) {
  return (
    <div className="w-screen mt-10 mx-10">
      <Typography variant="h1" className="text-base md:text-lg lg:text-2xl">
        {props.text}
      </Typography>
    </div>
  );
}

export default Title;
