// eslint-disable-next-line no-unused-vars
import React from "react";
import { images, icon } from "../constants";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import FeaturesCard from "./FeaturesCard";

const PopularProduct = () => {
  const product = [
    {
      title: "Collectible Sneakers",
      subtitle:
        "Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.",
      photo: images.sports,
      link: "/",
      videoUrl: "http://example.com/",
      id: 1,
      features: [
        {
          title: "Nibh viverra",
          description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
          icon: icon.cup,
          bgIcon: icon.triangle,
        },
        {
          title: "Cursus amet",
          description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
          icon: icon.hug,
          bgIcon: icon.triangeltwo,
        },
        {
          title: "Ipsum fermentum",
          description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
          icon: icon.shape,
          bgIcon: icon.circle,
        },
      ],
    },
  ];
  return (
    <section className="flex flex-col w-full relative  lg:h-[950px]  justify-start items-start">
      <div className="sm:clip-circle lg:clip-triangle h-[900px]  w-full absolute"></div>
      {product.map((product, key) => {
        return (
          <main
            key={key}
            className="flex flex-col lg:flex-row w-full h-auto lg:h-[583px] justify-start gap-10 lg:gap-40 items-center z-10"
          >
            <div className="flex  flex-col w-auto max-w-[714px] h-auto  lg:max-h-[257px] lg:items-start justify-between">
              <h1 className="text-center text-[56px]  lg:text-7xl leading-[79.2px] font-extrabold">
                {product.title}
              </h1>
              <h2 className=" mt-10 font-normal text-lg leading-7 text-center">
                {product.subtitle}
              </h2>
              <div className="flex items-center justify-center lg:justify-start w-full">
                <Link
                  to={"/"}
                  className="p-3 cursor-pointer px-5 text-lg font-medium leading-6 border-[#78350F] text-[#78350F]  border-2 rounded-lg "
                >
                  Sign Up Now
                </Link>
                <Link
                  to={product.videoUrl}
                  className="flex cursor-pointer text-[#78350F] text-base leading-6 justify-center items-center gap-3 p-10"
                >
                  <FaRegCirclePlay />
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="frame relative rounded-[50px] lg:-m-16 h-[272px] w-[276px] lg:w-[367px] lg:h-[372px]">
              <div className="lg:shape sm:shape">
                <img src={product.photo} className="object-cover  -mt-24 lg:-mt-0" />
              </div>
            </div>
          </main>
        );
      })}
      <div className="flex flex-col lg:flex-row w-full gap-5  justify-around z-10 items-center mt-20 lg:mt-10">
        {
          product[0].features.map(feature => {
            return(
              <FeaturesCard key={feature.title} {...feature}>
                <h2 className="text-lg font-normal leading-7 mt-4 text-center lg:text-start">
                  {feature.description}
                </h2>
              </FeaturesCard>
            )
          })
        }
      </div>
    </section>
  );
};

export default PopularProduct;
