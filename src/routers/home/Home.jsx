import TodayTopContainer from "./TodayTopContainer";
import TodayNewContainer from "./TodayNewContainer";
import TodayAskContainer from "./TodayAskContainer";
import TodayJobContainer from "./TodayJobContainer";

const Home = () => {
  return (
    <>
      <TodayTopContainer />
      <hr />
      <TodayNewContainer />
      <hr />
      <TodayAskContainer />
      <hr />
      <TodayJobContainer />
    </>
  );
};

export default Home;
