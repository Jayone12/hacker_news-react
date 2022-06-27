const TodayAsk = ({ value: { title } }) => {
  return (
    <li>
      <span>{title.match(/[\w\s]+\:/)}</span>
      {title.replace(/[\w\s]+\:/, "")}
    </li>
  );
};

export default TodayAsk;
