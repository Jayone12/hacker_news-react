import { diffTime } from "../../utils/diffTime";

const TodayNew = ({ value: { title, time, by } }) => {
  return (
    <li>
      <span>{diffTime(time)}</span>
      <div>{title}</div>
      <div>
        <img src="/images/user_icon.svg" alt="user icon" />
        <span>{by}</span>
      </div>
    </li>
  );
};

export default TodayNew;
