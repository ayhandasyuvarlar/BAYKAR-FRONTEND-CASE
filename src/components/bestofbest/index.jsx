import { Link } from "react-router-dom";
import { images } from "../../constants";
import ProductCard from "./ProductCard";
import "./style.css";

const BestOfBest = () => {
  const getProducts = [
    {
      categoryType: "BestOfBest",
      title: "The Best of the Best",
      products: [
        {
          title: "Title",
          subTitle:
            "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
          photo: images.productOne,
          id: 1,
        },
        {
          title: "Title",
          subTitle:
            "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
          photo: images.productTwo,
          id: 2,
        },
        {
          title: "Title",
          subTitle:
            "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
          photo: images.productThree,
          id: 3,
        },
      ],
    },
  ];
  return (
    <section className="w-full h-auto container">
      {getProducts &&
        getProducts.map((product, key) => (
          <div
            className="w-full h-auto xl:h-[776px] p-3 py-10 lg:p-[80px] flex flex-col  gap-10 lg:gap-20 overflow-hidden"
            key={key}
          >
            <div className="flex flex-col lg:flex-row gap-5 justify-center lg:justify-between items-center w-full text-white">
              <h1 className="w-auto text-[32px] leading-9 font-bold lg:w-9/12 lg:text-6xl lg:leading-[61.6px] lg:font-extrabold">
                {product.title}
              </h1>
              <Link
                to={"/"}
                className="p-3 cursor-pointer px-10 text-lg font-medium leading-6 border-white text-white border-2 rounded-lg "
              >
                Sign Up Now
              </Link>
            </div>
            <div className="flex flex-col  w-12/12 z-10 relative card-box lg:flex-row justify-center gap-10 items-center">
              <div className="lg:shape-1 absolute sm:shape-1"></div>
              <div className="lg:shape-2 absolute sm:shape-2"></div>
              <div className="lg:shape-3 absolute sm:shape-3"></div>
              <div className="lg:shape-4 absolute sm:shape-4"></div>
              <div className="lg:shape-5 absolute sm:shape-5"></div>
              {product.products.map((product) => (
                <ProductCard key={product.id} {...product}></ProductCard>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default BestOfBest;
