import TodayShow from "../../components/home/TodayShow";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";

const TodayShowContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("show", 5);

  return (
    <div>
      <div>
        <h3>Today’s show &gt;</h3>
        <div>
          <img src="/images/refresh_icon.svg" alt="refresh icon" />
        </div>
      </div>
      <div>
        <ul>
          {stories.map((value, index) => (
            <TodayShow value={value} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodayShowContainer;
