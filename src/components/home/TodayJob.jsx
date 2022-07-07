import styled from "styled-components";
import { diffTime } from "../../utils/diffTime";

const Story = styled.li`
  background-color: #eaf4f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 14px;
  height: 148px;
  .story__title {
    width: 100%;
    height: 60px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-top: 10px;
    -webkit-line-clamp: 3;
  }
  .story__url {
    padding: 6px 0 12px 0;
    font-size: 12px;
    font-weight: 400;
    color: #727272;
    text-decoration: underline;
  }
  .stoty__time {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #727272;
    padding: 12px 0;
    span {
      margin-top: 2px;
      margin-left: 4px;
    }
  }
`;

const TodayJob = ({ value: { url, title, time, id } }) => {
  return (
    <Story>
      <div className="story__title">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <a href={`/detail/${id}`}>{title}</a>
        )}
      </div>
      {url ? (
        <div className="story__url">
          {url?.replace(/[\w\s]+:\/\/|[\/\-][\w\/]+/gi, "")}
        </div>
      ) : (
        <div className="story__url">none</div>
      )}
      <div className="stoty__time">
        <img src="/images/clock_icon.svg" alt="clock icon" />
        <span>{diffTime(time)}</span>
      </div>
    </Story>
  );
};

export default TodayJob;
