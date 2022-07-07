import { diffTime } from "../../utils/diffTime";
import styled from "styled-components";

const StoryList = styled.li`
  .story__difftime {
    display: inline-block;
    font-size: 10px;
    color: #4ca5c4;
    padding: 5px 6px 4px;
    background: rgba(76, 165, 196, 0.15);
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .story__user-info {
    display: flex;
    align-items: center;
    margin-top: 16px;
    span {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  hr {
    border: 1px solid #b7b7b7;
    margin: 16px 0;
  }
`;

const TodayNew = ({ value: { title, time, by, url, id }, index }) => {
  return (
    <StoryList>
      <span className="story__difftime">{diffTime(time)}</span>
      <div className="story__title">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <a href={`/detail/${id}`}>{title}</a>
        )}
      </div>
      <div className="story__user-info">
        <img src="/images/user_icon.svg" alt="user icon" />
        <span>{by}</span>
      </div>
      {index === 3 ? null : <hr />}
    </StoryList>
  );
};

export default TodayNew;
