import { IconButton } from "@material-tailwind/react";
import { FiGithub } from "react-icons/fi";
import {
  FaMediumM,
  FaYoutube,
  FaItchIo,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

function ContactIcons() {
  return (
    <>
      <a href="https://github.com/NoahdoRegoUO" target="_blank">
        <IconButton className="rounded-full scale-[1] sm:scale-[1.3] bg-[#000000] shadow-none">
          <FiGithub className="h-[18px] w-[18px]" />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/noah-do-rego/" target="_blank">
        <IconButton className="rounded-full scale-[1] sm:scale-[1.3] bg-[#3f7bdd] shadow-none">
          <FaLinkedinIn className="h-[18px] w-[18px]" />
        </IconButton>
      </a>
      <a href="https://www.youtube.com/@its_deego" target="_blank">
        <IconButton className="rounded-full scale-[1] sm:scale-[1.3] bg-[#c4302b] shadow-none">
          <FaYoutube className="h-[18px] w-[18px]" />
        </IconButton>
      </a>
      <a href="https://noah-dorego.medium.com/" target="_blank">
        <IconButton className="rounded-full scale-[1] sm:scale-[1.3] bg-[#000000] shadow-none">
          <FaMediumM className="h-[18px] w-[18px]" />
        </IconButton>
      </a>
      <a href="mailto:noah.dorego@gmail.com" target="_blank">
        <IconButton className="rounded-full scale-[1] sm:scale-[1.3] bg-[#6080ca] shadow-none">
          <FaEnvelope className="h-[18px] w-[18px]" />
        </IconButton>
      </a>
      <a href="https://itsdeego.itch.io/" target="_blank">
        <IconButton className="rounded-full scale-[1] sm:scale-[1.3] bg-[#d1604c] shadow-none">
          <FaItchIo className="h-[18px] w-[18px]" />
        </IconButton>
      </a>
    </>
  );
}

export default ContactIcons;
