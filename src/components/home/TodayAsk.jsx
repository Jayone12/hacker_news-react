import styled from "styled-components";

const Story = styled.li`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  .stoty__ask {
    color: #ed702d;
  }
`;

const TodayAsk = ({ value: { title, id } }) => {
  return (
    <Story className="story__contianer">
      <a href={`/detail/${id}`}>
        <span className="stoty__ask">{title.match(/[\w\s]+\:/)}</span>
        {title.replace(/[\w\s]+\:/, "")}
      </a>
    </Story>
  );
};

export default TodayAsk;
