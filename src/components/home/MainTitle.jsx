import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  .content__reload {
    display: flex;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: 500;
      color: #878787;
      margin-top: 3px;
      margin-left: 3px;
    }
  }
`;

const MainTitle = ({ title, option }) => {
  return (
    <TitleContainer>
      <h3 className="main__title">{title}</h3>
      {option === "reload" ? (
        <div className="content__reload">
          <img src="/images/upload_time_icon.svg" alt="upload time" />
          <span>14:00</span>
        </div>
      ) : (
        <div>
          <img src="/images/refresh_icon.svg" alt="refresh icon" />
        </div>
      )}
    </TitleContainer>
  );
};

export default MainTitle;
