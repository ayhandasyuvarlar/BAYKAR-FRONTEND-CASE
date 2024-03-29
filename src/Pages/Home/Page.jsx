import PopularProduct from "../../components/PopularProduct";
import BestOfBest from "../../components/bestofbest";
import Collection from "../../components/GrowYourCollection";
import Comments from "../../components/comments";
import JoinPrompt from "../../components/joinPrompt";
import Map from "../../components/map";

const Home = () => {
  return (
    <>
      <PopularProduct></PopularProduct>
      <BestOfBest></BestOfBest>
      <JoinPrompt></JoinPrompt>
      <Comments></Comments>
      <Collection></Collection>
      <Map></Map>
    </>
  );
};

export default Home;
