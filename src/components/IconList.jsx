/* eslint-disable react/prop-types */
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const IconList = ({icon , size}) => {

const renderIcon = (iconName ,size) => {
  switch (iconName) {
    case "Facebook":
      return <FaFacebookF size={size}/>;
    case "Twitter":
      return <FaTwitter size={size}/>;
    case "Instagram":
      return <FaInstagram size={size}/>;
    case "LinkedIn":
      return <FaLinkedinIn size={size}/>;
    case "Youtube":
      return <FaYoutube size={size} />;
    default:
      return null;
  }
}; 
  return (
    <>{renderIcon(icon , size)}</>
  )
}

export default IconList



