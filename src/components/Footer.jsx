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
    <footer className="h-auto lg:h-[486px] flex flex-col gap-16 lg:p-[80px]">
      <div className="w-full flex  flex-col lg:flex-row justify-between items-center">
        <ul className="h-auto lg:h-[272px] w-auto flex flex-col justify-between items-center lg:items-start xl:w-72">
          {navigation.slice(0, 6).map((item) => (
            <li key={item}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="h-auto lg:h-[272px] w-full flex flex-col justify-between items-center lg:items-start lg:w-72">
          {navigation.slice(6, 12).map((item) => (
            <li key={item}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="h-auto lg:h-[272px] w-full flex flex-col justify-between items-center lg:items-start lg:w-72">
          {navigation.slice(12, 18).map((item) => (
            <li key={item}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="h-auto lg:h-[272px]  w-full flex flex-col justify-between items-center lg:items-start lg:w-72">
          <div className="flex flex-col gap-2 w-full">
            <p>Get the App</p>
            <Link to={""}>
              <img src={icon.appStore} alt="" />
            </Link>
            <Link to={""}>
              <img src={icon.googlePlay} alt="" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <h4>Follow us</h4>
            <ul className="flex flex-row w-full gap-4">
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
      <div className="border-t border-1 py-5 flex flex-col lg:flex-row w-full justify-between">
        <p className="text-lg font-normal leading-6">
          Collers @ 2023. All rights reserved.
        </p>
        <div className="flex flex-row gap-3 w-auto min-w-[302px] h-auto justify-end">
          <ul className="flex flex-row gap-2 items-center justify-center">
            <li className="font-lg leading-6 font-normal">Terms</li>
            <li className="font-lg leading-6 font-normal">Privacy</li>
            <li className="font-lg leading-6 font-normal">Contact</li>
          </ul>
          <button className="flex flex-row justify-center items-center gap-2">
            <TfiWorld size={24} color="white" />
            En
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
