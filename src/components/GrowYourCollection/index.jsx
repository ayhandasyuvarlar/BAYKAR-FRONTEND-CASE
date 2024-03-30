import { icon, images } from "../../constants";
import Screen from "../screen/Screen";
import "./style.css";

const Collection = () => {
  const collectionSection = [
    {
      name: "Cras eget",
      categoryType: "Cras eget",
      icon: icon.shieldCheck,
      index: 1,
    },
    {
      name: "Dolor pharetra",
      categoryType: "Dolor pharetra",
      icon: icon.rocket,
      index: 2,
    },
    {
      name: "Amet , fringilla",
      categoryType: "Amet , fringilla",
      icon: icon.screen,
      index: 3,
    },
    {
      name: "Amet nibh",
      categoryType: "Amet nibh",
      icon: icon.podcast,
      index: 4,
    },
    {
      name: "Sed velit",
      categoryType: "Sed velit",
      icon: icon.settings,
      index: 5,
    },
  ];
  return (
    <section className="w-full relative overflow-hidden flex flex-col h-[722px] md:h-[800px]  lg:h-[996px] py-0 lg:py-[80px] gap-3 lg:gap-10 justify-start items-center">
      <div className="flex flex-col justify-center gap-5 lg:gap-10 lg:items-start  items-center w-10/12 z-20">
        <h1 className="text-[32px] text-center md:text-start  leading-[35px] font-bold lg:text-[56px] lg:leading-[61.6px] lg:font-extrabold">
          Grow your collection
        </h1>
        <p className="leading-[28.8px] text-center font-normal lg:text-start  text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-center items-center h-[600px] md:h-[670px] lg:h-[556px] z-20">
        <ul className="flex flex-row lg:flex-col lg:h-full justify-start gap-10 lg:gap-5 p-5 lg:p-0 items-center lg:items-start overflow-y-hidden overflow-x-scroll scrollbar-hidden lg:overflow-hidden w-[100%] lg:w-[256px]  lg:pl-2">
          <button
            className="flex flex-row justify-center  text-xl leading-6 font-medium items-center gap-4 min-w-[240px]  lg:min-w-auto lg:w-full p-4 rounded-lg bg-white"
            style={{ boxShadow: " 0px 0px 4px 0px #00000012" }}
          >
            <img src={icon.search} alt="" />
            <p>Bibendum tellus</p>
            <img src={icon.right} alt="" className="hidden lg:flex" />
          </button>
          {collectionSection.map((collection) => (
            <li
              className="flex flex-row justify-start items-center  gap-2 lg:gap-4  
               p-4 min-w-[240px] lg:min-w-auto lg:w-full text-xl leading-6 font-medium"
              key={collection.index}
            >
              <img src={collection.icon} alt={collection.categoryType} />
              <p>{collection.name} </p>
            </li>
          ))}
        </ul>
        <div className="w-full lg:w-8/12 flex flex-col items-start  pl-4 lg:pl-20  h-full justify-start">
          <Screen
            tab={true}
            className={
              "flex flex-col w-8/12 h-[48%] lg:w-10/12 lg:h-[80%] border-[5px] border-white"
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
              "flex flex-col w-8/12  lg:w-10/12 -mt-[30%] lg:-mt-[36%]  ml-[15%] h-[55%] lg:h-[80%] border-[5px] border-white "
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
              "flex flex-col  w-3/12  h-[30%] ml-[70%] -mt-[35%] lg:-mt-[36%]  lg:ml-[80%] lg:h-[50%] border-[5px] border-white "
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
      <img
        src={icon.waveOne}
        alt="wave"
        className="absolute bottom-0  z-10 w-full"
      />
      <img
        src={icon.waveThree}
        alt="wave"
        className="absolute bottom-0 z-10 w-full"
      />
      <img
        src={icon.waveTwo}
        alt="wave"
        className="absolute bottom-0  z-10 w-full"
      />
    </section>
  );
};

export default Collection;
