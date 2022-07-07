import TodayTop from "../../components/home/TodayTop";
import styled from "styled-components";
import useHomeDataFetch from "../../hooks/useHomeDataFetch";
import Slider from "react-slick";
import MainTitle from "./MainTitle";
import BorderLine from "./BorderLine";

const TopWrapper = styled.div`
  .contents__container {
    position: relative;
    height: 526px;
    margin-top: 20px;
    overflow: hidden;
    .slick-slide {
      display: inline-block;
    }
    .slick-dots {
      width: 100%;
      text-align: center;
      margin-top: 16px;
      li {
        position: relative;
        display: inline-block;
        margin: 0 5px;
      }
      li.slick-active {
        button {
          width: 8px;
          height: 8px;
          background-color: #ed702d;
        }
      }
      button {
        font-size: 0;
        width: 6px;
        height: 6px;
        border-radius: 10px;
        background-color: #b7b7b7;
      }
    }
  }
`;

const TodayTopContainer = () => {
  const { isLoading, stories } = useHomeDataFetch("top", 0, 15);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <TopWrapper className="inner__wrapper">
        <MainTitle title="Today’s top &gt;" option={"reload"} />
        <div className="contents__container">
          <Slider {...settings}>
            <ul className="story__contianer">
              {stories.slice(0, 5).map((value, index) => (
                <TodayTop key={value.id} index={index + 1} value={value} />
              ))}
            </ul>
            <ul className="story__contianer">
              {stories.slice(5, 10).map((value, index) => (
                <TodayTop key={value.id} index={index + 6} value={value} />
              ))}
            </ul>
            <ul className="story__contianer">
              {stories.slice(10, 15).map((value, index) => (
                <TodayTop key={value.id} index={index + 11} value={value} />
              ))}
            </ul>
          </Slider>
        </div>
      </TopWrapper>
      <BorderLine />
    </>
  );
};

export default TodayTopContainer;
