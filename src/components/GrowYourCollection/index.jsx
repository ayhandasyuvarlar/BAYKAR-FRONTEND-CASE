import { images } from "../../constants";
import Screen from "../screen/Screen";
import "./style.css";

const Collection = () => {
  const collectionSection = [
    {
      name : ''
    }
  ]
  return (
    <section className="w-full flex flex-col lg:h-[996px] py-[80px] gap-10 justify-start items-center border">
      <div className="flex flex-col justify-center gap-10 items-start  w-10/12">
        <h1 className="text-[56px] leading-[61.6px] font-extrabold">
          Grow your collection
        </h1>
        <p className="leading-[28.8px] font-normal text-start  text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="w-full flex flex-row justify-between items-center h-[556px]">
        <div></div>
        <div className="w-8/12 flex flex-col items-start  h-full justify-start">
          <Screen
           tab={true}
            className={
              "flex flex-col w-9/12 h-[80%] border-[5px] border-white"
            }
          >
            <img
              src={images.peopleSneakers}
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Screen>
          <Screen
           tab={true}
            className={
              "flex flex-col w-9/12 -mt-80  ml-20 h-[80%] border-[5px] border-white "
            }
          >
            <img
              src={images.productTwo}
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Screen>
          <Screen
           tab={false}
            className={
              "flex flex-col w-3/12 -mt-80  ml-[670px] h-[50%] border-[5px] border-white "
            }
          >
            <img
              src={images.beg}
              alt=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Screen>
        </div>
      </div>
    </section>
  );
};

export default Collection;
