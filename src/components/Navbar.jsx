import { Link } from "react-router-dom";
import { icon } from "../constants";
import React, { useEffect, useRef } from "react";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
const navigation = [
  {
    name: "Products",
    path: "/",
  },
  {
    name: "Solutions",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/",
  },
  {
    name: "Resources",
    path: "/",
  },
  {
    name: "Log In",
    path: "/",
  },
  {
    name: "Sign Up Now",
    path: "/",
  },
];

const Navbar = () => {
  const [hidden, setHidden] = React.useState(false);
  const menuRef = useRef(null);
  const handleClick = () => {
    setHidden(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHidden(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="flex w-full justify-between items-center py-10  px-5 font-custom text-[#78350F]">
      {/* */}
      <div className="">
        <Link to={"#"} className="text-3xl font-semibold">
          Collers
        </Link>
      </div>
      <div>
        <ul className="hidden flex-row items-center justify-center gap-6 lg:flex">
          {navigation.map((navigation, key) => {
            return (
              <li key={key} className="navigation-list">
                <NavLink {...navigation}></NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex lg:hidden">
        <button onClick={handleClick} className="z-10">
          <img src={icon.menuScale} alt="" />
        </button>
      </div>
      {
        <AnimatePresence>
          {hidden && (
            <motion.div
              ref={menuRef}
              className="menu z-20"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full flex justify-between items-center">
                <Link to={"#"} className="text-3xl font-semibold">
                  Collers
                </Link>
                <button
                  onClick={() => {
                    setHidden(false);
                  }}
                >
                  <IoCloseSharp size={30} />
                </button>
              </div>
              <div className="h-3/4 flex justify-center items-center">
                <ul className="flex-row items-center justify-center">
                  {navigation.map((navigation, key) => {
                    return (
                      <motion.li
                        className="mobile-navigation mt-4 text-lg"
                        key={key}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
              
                      >
                        <motion.a href="#">{navigation.name}</motion.a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      }
    </nav>
  );
};

export default Navbar;
