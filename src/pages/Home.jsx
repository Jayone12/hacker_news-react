import TodayTopContainer from "../components/home/TodayTopContainer";
import TodayNewContainer from "../components/home/TodayNewContainer";
import TodayAskContainer from "../components/home/TodayAskContainer";
import TodayJobContainer from "../components/home/TodayJobContainer";
import TodayShowContainer from "../components/home/TodayShowContainer";

const Home = () => {
  return (
    <>
      <img
        src="/images/home_banner.svg"
        alt="Use Hacker News! For your Hacker Effect!"
      />
      <TodayTopContainer />
      <TodayNewContainer />
      <TodayShowContainer />
      <TodayAskContainer />
      <TodayJobContainer />
    </>
  );
};

export default Home;
