import { useState, useEffect, createElement } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  Square3Stack3DIcon,
  WrenchIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { LuChefHat, LuGamepad2 } from "react-icons/lu";

const colors: { [index: string]: string } = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "blue",
    icon: BookOpenIcon,
    title: "Blog",
    description: "Incoherent writing covering various topics.",
    page: "blog",
  },
  {
    color: "orange",
    icon: LuGamepad2,
    title: "Games",
    description: 'My "polished" Unity games.',
    page: "games",
  },
  {
    color: "purple",
    icon: LuChefHat,
    title: "Recipes",
    description: "Some food that I've thrown together.",
    page: "recipes",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, page }, key) => (
      <a href={page} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-semibold"
            color="blue-gray"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform md:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform md:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl md:block flex-row border-none">
          <ul className="grid grid-cols-3 gap-y-2 border-none outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block md:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 md:mt-0 md:mb-0 md:flex-row md:p-1">
      <Typography
        as="a"
        href="/#"
        variant="small"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <HomeIcon className="h-[18px] w-[18px]" />
          Home
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="projects"
        variant="small"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <WrenchIcon className="h-[18px] w-[18px]" />
          Projects
        </ListItem>
      </Typography>

      <NavListMenu />
    </List>
  );
}

export default function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

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
      <Navbar className="max-w-full px-4 py-2 rounded-none border-none bg-transparent">
        <div className="text-blue-gray-900 select-none flex items-center justify-between">
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
              className="mr-4 cursor-pointer py-1.5 ml-2"
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
