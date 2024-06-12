import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
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
    <div className="flex items-start gap-4">
      <Typography as="a" href="/" className="font-semibold">
        <Button className="flex items-center gap-2 px-4 py-2 rounded-full">
          <HomeIcon className="h-[18px] w-[18px]" />
          Home
        </Button>
      </Typography>

      <Typography as="a" href="projects" className="font-semibold">
        <Button
          color="green"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <WrenchIcon className="h-[18px] w-[18px]" />
          Projects
        </Button>
      </Typography>

      <Typography as="a" href="games" className="font-semibold">
        <Button
          color="red"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <LuGamepad2 className="h-[18px] w-[18px]" />
          Games
        </Button>
      </Typography>

      <Typography as="a" href="blog" className="font-semibold">
        <Button
          color="orange"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <BookOpenIcon className="h-[18px] w-[18px]" />
          Blog
        </Button>
      </Typography>
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
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
