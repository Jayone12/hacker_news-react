import { diffTime } from "../../utils/diffTime";

const TodayTop = ({ index, value: { title, score, time, by } }) => {
  return (
    <li>
      <div>{index}</div>
      <div>{title}</div>
      <div>
        <span>{by} </span>
        <span>{score} points </span>
        <span>{diffTime(time)}</span>
      </div>
    </li>
  );
};

export default TodayTop;
