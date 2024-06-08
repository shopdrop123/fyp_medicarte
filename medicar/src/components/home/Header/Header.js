import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('medicarte_user_token');
    localStorage.removeItem('medicarte_user_id');
    navigate('/signin');
  };

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-32 object-cover" imgSrc={logo} />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
                {localStorage.getItem('medicarte_user_token') && (
                  <NavLink
                    onClick={handleLogout}
                    className="flex font-normal hover:font-bold w-28 h-6 justify-center items-center px-4 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  >
                    <li>Log Out</li>
                  </NavLink>
                )}
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-80 h-full bg-white relative"
                >
                  <div className="w-full h-full p-6 flex flex-col">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-black flex flex-col gap-4">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold text-lg hover:underline underline-offset-4 decoration-1 hover:text-black"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2 hover:text-black"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            New Arrivals
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Gadgets
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Accessories
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Electronics
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Others
                          </li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2 hover:text-black"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            New Arrivals
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Gadgets
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Accessories
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Electronics
                          </li>
                          <li className="headerSidenavLi hover:bg-gray-200 p-2 rounded-md">
                            Others
                          </li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-2 border-gray-300 absolute top-4 right-4 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
