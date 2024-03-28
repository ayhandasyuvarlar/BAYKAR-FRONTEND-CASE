import PopularProduct from "../../components/PopularProduct";
import BestOfBest from "../../components/bestofbest";
import Comments from "../../components/comments";
import JoinPrompt from "../../components/joinPrompt";

const Home = () => {
  return (
    <>
      <PopularProduct></PopularProduct>
      <BestOfBest></BestOfBest>
      <JoinPrompt></JoinPrompt>
      <Comments></Comments>
    </>
  );
};

export default Home;
