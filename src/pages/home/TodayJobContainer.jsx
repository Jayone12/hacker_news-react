import TodayJob from "../../components/home/TodayJob";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";

const TodayJobContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("job", 0, 5);

  return (
    <div>
      <h3>Today's Job &gt;</h3>
      <ul>
        {stories.map((value, index) => (
          <TodayJob key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayJobContainer;
