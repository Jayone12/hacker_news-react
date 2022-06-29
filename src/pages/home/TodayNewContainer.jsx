import TodayNew from "../../components/home/TodayNew";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";

const TodayNewContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("new", 0, 4);

  return (
    <div>
      <div>
        <h3>Today’s New &gt;</h3>
        <div>
          <img src="/images/refresh_icon.svg" alt="refresh button" />
        </div>
      </div>
      <ul>
        {stories.map((value, index) => (
          <TodayNew key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayNewContainer;
