import TodayShow from "../../components/home/TodayShow";
import styled from "styled-components";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";
import Slider from "react-slick";
import MainTitle from "./MainTitle";
import BorderLine from "./BorderLine";

const StoryLists = styled.div`
  .contents__container {
    position: relative;
    height: 300px;
    margin-top: 20px;
    overflow: hidden;
    .slick-slide {
      display: inline-block;
    }
  }
`;

const TodayShowContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("show", 0, 5);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <StoryLists className="inner__wrapper">
        <MainTitle title="Today's show &gt;" option={"refresh"} />
        <ul className="contents__container">
          <Slider {...settings}>
            {stories.map((value, index) => (
              <TodayShow value={value} />
            ))}
          </Slider>
        </ul>
      </StoryLists>
      <BorderLine />
    </>
  );
};

export default TodayShowContainer;
