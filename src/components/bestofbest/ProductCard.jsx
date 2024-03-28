/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { icon } from "../../constants";

const ProductCard = ({ title, subTitle, photo, id }) => {
  return (
    <aside id={id} className="w-11/12  lg:w-[397px] z-10 h-[472px] flex flex-col justify-between items-center rounded-sm overflow-hidden shadow-box">
      <div className="w-full h-[220px]">
        <img src={photo} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="text-white flex flex-col items-start gap-4 w-11/12">
        <h1 className="text-2xl leading-[26.4px] font-bold">{title}</h1>
        <p className="text-lg font-normal leading-7">{subTitle}</p>
      </div>
      <div className="flex w-full justify-center items-center h-[120px] p-8 ">
        <Link
          to={`/product/${id}`}
          className="h-[56px] flex justify-center gap-4 w-10/12 cursor-pointer p-4 text-xl font-medium leading-6 border-white text-white border-2 rounded-lg "
        >
          <img src={icon.basket} alt="" />
          Buy Now
        </Link>
      </div>
    </aside>
  );
};

export default ProductCard;
