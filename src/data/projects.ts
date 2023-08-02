import bookerImage from "../assets/images/projects/booker.png";
import onedayImage from "../assets/images/projects/oneday.png";
import trendImage from "../assets/images/projects/trend.jpg";
import personalWebsiteImage from "../assets/images/projects/personal-website.jpg";
import unityImage from "../assets/images/projects/unity-art-2023.jpg";

const projectsData = [
  {
    title: "Personal Website",
    image: personalWebsiteImage,
    desc: "My personal website (yes, this one!) made with Vite + React, Tailwind CSS",
    link: "https://noahdorego.com",
  },
  {
    title: "OneDay",
    image: onedayImage,
    desc: "A minimalist, simplified daily planner app made with React Native",
    link: "https://play.google.com/store/apps/details?id=com.expo.oneday",
  },
  {
    title: "Booker",
    image: bookerImage,
    desc: "A fullstack application for booking hotels made with a friend as a university project (private repo)",
    link: "https://github.com/NoahdoRegoUO/Booker",
  },
  {
    title: "Trend [In development]",
    image: trendImage,
    desc: "A mobile app that displays trending content from other platforms made with React Native (private repo)",
    link: undefined,
  },
  {
    title: "Unity Games",
    image: unityImage,
    desc: "All of the games I've made in Unity (programmed in C#)",
    link: "https://itsdeego.itch.io/",
  },
];

export default projectsData;
