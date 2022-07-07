import styled from "styled-components";
import Slider from "react-slick";
import TodayJob from "../../components/home/TodayJob";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";
import MainTitle from "./MainTitle";

const StoryLists = styled.div`
  .contents__container {
    position: relative;
    height: 300px;
    margin-top: 20px;
    overflow: hidden;
    .slick-slide {
      display: inline-flex;
    }
  }
`;

const TodayJobContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("job", 0, 5);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StoryLists className="inner__wrapper">
      <MainTitle title="Today's job &gt;" option={"refresh"} />
      <ul className="contents__container">
        <Slider {...settings}>
          {stories.map((value, index) => (
            <TodayJob key={index} value={value} />
          ))}
        </Slider>
      </ul>
    </StoryLists>
  );
};

export default TodayJobContainer;
