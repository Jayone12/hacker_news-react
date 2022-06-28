import { diffTime } from "../../utils/diffTime";

const TodayJob = ({ value: { url, title, time } }) => {
  return (
    <li>
      {title} <br />
      <span>{url?.replace(/[\w\s]+:\/\/|[\/\-][\w\/]+/gi, "")}</span>
      <div>
        <img src="/images/clock_icon.png" alt="clock icon" />
        <span>{diffTime(time)}</span>
      </div>
    </li>
  );
};

export default TodayJob;
