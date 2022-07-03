import TodayTop from "../../components/home/TodayTop";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";

const TodayTopContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("top", 0, 15);

  return (
    <div>
      <div>
        <h3>Today’s top &gt;</h3>
        <div>
          <img src="/images/upload_time_icon.svg" alt="upload time" />
          <span>14:00</span>
        </div>
      </div>
      <ul>
        {stories.slice(0, 5).map((value, index) => (
          <TodayTop key={index} index={index + 1} value={value} />
        ))}
        {stories.slice(5, 10).map((value, index) => (
          <TodayTop key={index} index={index + 6} value={value} />
        ))}
        {stories.slice(10, 15).map((value, index) => (
          <TodayTop key={index} index={index + 11} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayTopContainer;
