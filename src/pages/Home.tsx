import { Typography } from "@material-tailwind/react";
import { TypeAnimation } from 'react-type-animation';

function Home() {

  return (
    <>
        <Typography
            variant="h1"
            className = "ml-20 mt-20 text-8xl"
        >
            Noah do Régo
        </Typography>
        <Typography>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'University Student',
                750, // wait 1s before replacing "Mice" with "Hamsters"
                'Developer',
                750,
                'Designer',
                750,
                'Writer',
                750,
                'Self-proclaimed dingus',
                750
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            />
        </Typography>
    </>
  )
}

export default Home
