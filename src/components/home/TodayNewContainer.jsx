import TodayNew from "../../components/home/TodayNew";
import styled from "styled-components";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";
import MainTitle from "./MainTitle";
import BorderLine from "./BorderLine";

const NewContainer = styled.div`
  .inner__wrapper {
    margin-bottom: 56px;
  }
  .story__contianer {
    margin-top: 20px;
  }
`;

const TodayNewContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("new", 0, 4);

  return (
    <NewContainer>
      <div className="inner__wrapper">
        <MainTitle title="Today's New &gt;" option={"refresh"} />
        <ul className="story__contianer">
          {stories.map((value, index) => (
            <TodayNew key={value.id} index={index} value={value} />
          ))}
        </ul>
      </div>
      <BorderLine />
    </NewContainer>
  );
};

export default TodayNewContainer;
