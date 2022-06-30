import TodayTopContainer from "../components/home/TodayTopContainer";
import TodayNewContainer from "../components/home/TodayNewContainer";
import TodayAskContainer from "../components/home/TodayAskContainer";
import TodayJobContainer from "../components/home/TodayJobContainer";
import TodayShowContainer from "../components/home/TodayShowContainer";

const Home = () => {
  return (
    <>
      <TodayTopContainer />
      <hr />
      <TodayNewContainer />
      <hr />
      <TodayShowContainer />
      <hr />
      <TodayAskContainer />
      <hr />
      <TodayJobContainer />
    </>
  );
};

export default Home;
