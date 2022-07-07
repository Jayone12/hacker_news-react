import styled from "styled-components";
import { diffTime } from "../utils/diffTime";

const StoryList = styled.li`
  .user__container {
    display: flex;
    justify-content: space-between;
  }
`;

const StoryLists = ({ value: { title, by, score, time, kids, url, id } }) => {
  return (
    <StoryList className="story__contianer">
      <div className="story__title">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <a href={`/detail/${id}`}>{title}</a>
        )}
      </div>
      <div className="user__container">
        <div className="story__user">
          <img src="/images/user_icon.svg" alt="user icon" />
          <span>{by}</span>
          <span>{score} points</span>
          <span>{diffTime(time)}</span>
        </div>
        <div>
          <img src="/images/comment_icon.svg" alt="comment icon" />
          <span>{kids ? kids.length : 0}</span>
        </div>
      </div>
    </StoryList>
  );
};

export default StoryLists;
