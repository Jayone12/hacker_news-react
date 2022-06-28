import TodayTopContainer from "./TodayTopContainer";
import TodayNewContainer from "./TodayNewContainer";
import TodayAskContainer from "./TodayAskContainer";
import TodayJobContainer from "./TodayJobContainer";
import TodayShowContainer from "./TodayShowContainer";

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
