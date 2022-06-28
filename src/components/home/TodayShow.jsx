import React from "react";
import { diffTime } from "../../utils/diffTime";

const TodayShow = ({ value: { url, title, score, time, by, kids } }) => {
  return (
    <li>
      <span>{url.replace(/[\w\s]+:\/\/|[\/\-][\w\/]+/gi, "")}</span>
      <div>
        <span>{title.substring(0, 8)}</span>
        {title.substring(8)}
      </div>
      <div>
        <img src="/images/point_icon.png" alt="point icon" />
        <span>{score}</span>
        <img src="/images/clock_icon.png" alt="clock icon" />
        <span>{diffTime(time)}</span>
      </div>
      <div>
        <div>
          <img src="/images/user_icon.svg" alt="user icon" />
          <span>{by}</span>
        </div>
        <hr />
        <div>
          <img src="/images/comment_icon.png" alt="comment icon" />
          <span>{kids.length}</span>
        </div>
      </div>
    </li>
  );
};

export default TodayShow;
