import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { icon } from "../constants";
import IconList from "./IconList";
const Footer = () => {
  const navigation = [
    {
      name: "Product",
      path: "/",
    },
    {
      name: "Pricing",
      path: "/",
    },
    {
      name: "Overview",
      path: "/",
    },
    {
      name: "Browse",
      path: "/",
    },
    {
      name: "Accessibility",
      path: "/",
    },
    {
      name: "Five",
      path: "/",
    },
    {
      name: "Solutions",
      path: "/",
    },
    {
      name: "Brainstorming",
      path: "/",
    },
    {
      name: "Ideation",
      path: "/",
    },
    {
      name: "Wireframing",
      path: "/",
    },
    {
      name: "Research",
      path: "/",
    },
    {
      name: "Design",
      path: "/",
    },
    {
      name: "Support",
      path: "/",
    },
    {
      name: "Contact us",
      path: "/",
    },
    {
      name: "Developers",
      path: "/",
    },
    {
      name: "Documentation",
      path: "/",
    },
    {
      name: "Integrations",
      path: "/",
    },
    {
      name: "Reports",
      path: "/",
    },
  ];
  const socialMedia = [
    {
      name: "Youtube",
      icon: "FaYoutube",
      path: "https://www.youtube.com/",
    },
    {
      name: "Facebook",
      icon: "FaFacebookF",
      path: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: "FaTwitter",
      path: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: "FaInstagram ",
      path: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: "FaLinkedinIn",
      path: "https://www.linkedin.com",
    },
  ];

  return (
    <footer className="h-auto lg:h-[486px] flex flex-col lg:gap-16 gap-5 lg:p-[80px]">
      <div className="w-full flex  flex-col gap-16 pt-16 lg:pt-0  lg:flex-row justify-between items-center">
        <ul className="h-auto lg:h-[272px] w-auto flex flex-col gap-3 lg:gap-0 justify-between items-center lg:items-start xl:w-72">
          {navigation.slice(0, 6).map((item) => (
            <li key={item}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="h-auto lg:h-[272px] w-full flex flex-col gap-3 lg:gap-0 justify-between items-center lg:items-start lg:w-72">
          {navigation.slice(6, 12).map((item) => (
            <li key={item}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="h-auto lg:h-[272px] w-full flex flex-col gap-3 lg:gap-0 justify-between items-center lg:items-start lg:w-72">
          {navigation.slice(12, 18).map((item) => (
            <li key={item}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="h-auto lg:h-[272px]  w-full gap-10 lg:gap-0 flex flex-col justify-between items-center lg:items-start lg:w-72">
          <div className="flex flex-col  gap-5 w-full justify-center items-center lg:items-start">
            <p>Get the App</p>
            <Link to={""}>
              <img src={icon.appStore} alt="" />
            </Link>
            <Link to={""}>
              <img src={icon.googlePlay} alt="" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 justify-center lg:items-start items-center w-full ">
            <h4>Follow us</h4>
            <ul className="flex flex-row w-full gap-4 justify-center lg:justify-start">
              {socialMedia.map((item) => (
                <li key={item.name}>
                  <a href={item.path}>
                    <IconList size={24} icon={item.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-1 gap-7 lg:gap-2 p-10 lg:py-5 lg:px-0 flex flex-col lg:flex-row w-full justify-between">
        <p className="lg:text-lg text-base font-normal leading-6 text-center lg:text-start">
          Collers @ 2023. All rights reserved.
        </p>
        <div className="flex flex-row gap-3 w-auto   min-w-[302px] h-auto lg:justify-end  ">
          <ul className="flex flex-row gap-5 items-center  justify-between w-full lg:p-0 lg:w-auto lg:justify-center">
            <li className="text-base lg:font-lg leading-6 font-normal">
              <Link to={""}>Terms</Link>
            </li>
            <li className="text-base lg:font-lg leading-6 font-normal">
              <Link to={""}> Privacy</Link>
            </li>
            <li className="text-base lg:font-lg leading-6 font-normal">
              <Link to={""}> Contact</Link>
            </li>
            <button className="flex flex-row justify-center items-center gap-2">
              <TfiWorld size={24} color="white" />
              <span className="text-base lg:font-lg font-normal">En</span>
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
