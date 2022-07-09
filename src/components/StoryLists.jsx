import styled from "styled-components";
import { diffTime } from "../utils/diffTime";

const StoryList = styled.li`
  .user__container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 12px;
    .story__user {
      display: flex;
      align-items: center;
      width: 80%;
      .user__name {
        margin-left: 3px;
      }
      .user__point,
      .user__difftime {
        margin-left: 6px;
      }
    }
    .story__comment {
      display: flex;
      align-items: center;
      span {
        margin-top: 2px;
        margin-left: 4px;
        color: #ed702d;
      }
    }
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
          <span class="user__name">{by}</span>
          <span class="user__point">{score} points</span>
          <span class="user__difftime">{diffTime(time)}</span>
        </div>
        <div className="story__comment">
          <img src="/images/comment_icon.svg" alt="comment icon" />
          <span>{kids ? kids.length : 0}</span>
        </div>
      </div>
    </StoryList>
  );
};

export default StoryLists;
