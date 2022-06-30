import { diffTime } from "../utils/diffTime";

const StoryLists = ({ value: { title, by, score, time, kids, url } }) => {
  return (
    <li>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      <div>
        <div>
          <img src="/images/user_icon.svg" alt="user icon" />
          <span>{by}</span>
          <span>{score} points</span>
          <span>{diffTime(time)}</span>
        </div>
        <img src="/images/comment_icon.png" alt="comment icon" />
        <span>{kids ? kids.length : 0}</span>
      </div>
    </li>
  );
};

export default StoryLists;
