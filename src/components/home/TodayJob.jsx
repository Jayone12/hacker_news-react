const TodayJob = ({ value: { url, title } }) => {
  return (
    <li>
      {title} <br />
      <span>({url.replace(/[\w\s]+:\/\/|[\/\-][\w\/]+/gi, "")})</span>
      <div>
        <img src="/images/clock_icon.png" alt="clock icon" />
        <span>2 minutes ago</span>
      </div>
    </li>
  );
};

export default TodayJob;
