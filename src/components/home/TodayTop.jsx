import { diffTime } from "../../utils/diffTime";

const TodayTop = ({ index, value: { title, score, time, by, url, id } }) => {
  return (
    <li>
      <ul>
        <li>
          <div>{index}</div>
          <div>
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <a href={`/detail/${id}`}>{title}</a>
            )}
          </div>
          <div>
            <span>{by} </span>
            <span>{score} points </span>
            <span>{diffTime(time)}</span>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default TodayTop;
