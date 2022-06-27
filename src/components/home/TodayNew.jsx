const TodayNew = ({ value }) => {
  return (
    <li>
      <span>2 minutes ago</span>
      <div>{value.title}</div>
      <div>
        <img src="/images/user_icon.svg" alt="user icon" />
        <span>{value.by}</span>
      </div>
    </li>
  );
};

export default TodayNew;
