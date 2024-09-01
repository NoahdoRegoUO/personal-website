import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  WrenchIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { LuGamepad2 } from "react-icons/lu";

function NavList() {
  return (
    <div className="flex items-start gap-2 sm:gap-5 max-w-full overflow-x-auto">
      <motion.a
        href="/"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-[#242424] dark:text-[#F5F5F5]"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <HomeIcon className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Home
      </motion.a>
      <div className="h-6 rounded-full border-r-[1px] border-current"></div>
      <motion.a
        href="projects"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-[#242424] dark:text-[#F5F5F5]"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <WrenchIcon className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Projects
      </motion.a>
      <div className="h-6 rounded-full border-r-[1px] border-current"></div>
      <motion.a
        href="games"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-[#242424] dark:text-[#F5F5F5]"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <LuGamepad2 className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Games
      </motion.a>
      <div className="h-6 rounded-full border-r-[1px] border-current"></div>
      <motion.a
        href="blog"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-[#242424] dark:text-[#F5F5F5]"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <BookOpenIcon className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Blog
      </motion.a>
    </div>
  );
}

export default function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full">
      <Navbar
        className="max-w-full p-3 rounded-none border-none bg-[#F5F5F5] dark:bg-[#242424]"
        blurred={false}
        shadow={false}
      >
        <div className="text-blue-gray-900 dark:text-white h-fit select-none flex items-center justify-between">
          <div className="hidden md:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="md:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <div className="justify-end flex">
            <Typography
              variant="h6"
              className="mr-2 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <MoonIcon className="h-[30px] w-[30px] text-white" />
              ) : (
                <SunIcon className="h-[30px] w-[30px]" />
              )}
            </Typography>
          </div>
        </div>
        <Collapse open={openNav} className="flex justify-center ">
          <NavList />
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
