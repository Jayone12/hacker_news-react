import TodayAsk from "./TodayAsk";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";
import styled from "styled-components";
import MainTitle from "./MainTitle";
import BorderLine from "./BorderLine";

const AskContainer = styled.div`
  margin-bottom: 56px;
  li:not(:first-child) {
    margin-top: 16px;
  }
`;

const TodayAskContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("ask", 0, 5);

  return (
    <>
      <AskContainer className="inner__wrapper">
        <MainTitle title="Today's Ask &gt;" option={"refresh"} />
        <ul>
          {stories.map((value, index) => (
            <TodayAsk key={index} value={value} />
          ))}
        </ul>
      </AskContainer>
      <BorderLine />
    </>
  );
};

export default TodayAskContainer;
