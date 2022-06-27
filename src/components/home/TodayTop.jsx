const TodayTop = ({ index, value: { title } }) => {
  return (
    <li>
      <div>{index}</div>
      <div>{title}</div>
    </li>
  );
};

export default TodayTop;
