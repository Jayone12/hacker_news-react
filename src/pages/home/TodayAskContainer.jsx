import TodayAsk from "../../components/home/TodayAsk";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";

const TodayAskContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("ask", 5);

  return (
    <div>
      <div>
        <h3>Today's Ask &gt;</h3>
      </div>
      <ul>
        {stories.map((value, index) => (
          <TodayAsk key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayAskContainer;
