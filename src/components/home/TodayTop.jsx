import { diffTime } from "../../utils/diffTime";
import styled from "styled-components";

const List = styled.li`
  display: flex;
  margin: 14px 0;
  .story__rank {
    font-size: 24px;
    font-weight: 600;
    color: #ed702d;
    margin-top: 3px;
    margin-right: 33px;
  }

  .story__info {
    font-size: 12px;
    color: #727272;
    margin-top: 14px;
    span:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const TodayTop = ({ index, value: { title, score, time, by, url, id } }) => {
  return (
    <List>
      <span className="story__rank">{index}</span>
      <div className="story__content">
        <div className="story__title">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            <a href={`/detail/${id}`}>{title}</a>
          )}
        </div>
        <div className="story__info">
          <span>{by} </span>
          <span>{score} points </span>
          <span>{diffTime(time)}</span>
        </div>
      </div>
    </List>
  );
};

export default TodayTop;
