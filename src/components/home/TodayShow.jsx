import React from "react";
import styled from "styled-components";
import { diffTime } from "../../utils/diffTime";
import domainFromUrl from "../../utils/domainFormUrl";

const Story = styled.li`
  height: 224px;
  background-color: #eaf4f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 14px;
  .story__url {
    display: inline-block;
    font-size: 10px;
    background-color: #f49664;
    border-radius: 20px;
    color: #f5f5f5;
    padding: 4px 6px;
  }
  .story__title {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    height: 106px;
    margin-top: 10px;
    .stoty__show {
      color: #ed702d;
    }
  }
  .story__point {
    margin-top: 12px;
    font-size: 12px;
    color: #727272;
    display: flex;
    align-items: center;
    img:not(:first-child) {
      margin-left: 6px;
    }
    span {
      margin-top: 4px;
      margin-left: 4px;
    }
  }
  hr {
    border: 1px solid #dfdfdf;
    margin: 11px 0 17px 0;
  }
  .story__info {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: bold;
    .story__user {
      display: flex;
      align-items: center;
      color: #727272;
    }
    .story__comment {
      display: flex;
      align-items: center;
      color: #ed702d;
    }
    span {
      margin-top: 2px;
      margin-left: 4px;
    }
  }
`;

const TodayShow = ({ value: { url, title, score, time, by, kids, id } }) => {
  return (
    <Story>
      {url ? (
        <span className="story__url">{url && domainFromUrl(url)}</span>
      ) : (
        <span className="story__url">none</span>
      )}
      <div className="story__title">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span className="stoty__show">{title.substring(0, 8)}</span>
            {title.substring(8)}
          </a>
        ) : (
          <a href={`/detail/${id}`}>
            <span className="stoty__show">{title.substring(0, 8)}</span>
            {title.substring(8)}
          </a>
        )}
      </div>
      <div className="story__point">
        <img src="/images/point_icon.svg" alt="point icon" />
        <span>{score}</span>
        <img src="/images/clock_icon.svg" alt="clock icon" />
        <span>{diffTime(time)}</span>
      </div>
      <hr />
      <div className="story__info">
        <div className="story__user">
          <img src="/images/user_icon.svg" alt="user icon" />
          <span>{by}</span>
        </div>
        <div className="story__comment">
          <img src="/images/comment_icon.svg" alt="comment icon" />
          <span>{kids ? kids?.length : 0}</span>
        </div>
      </div>
    </Story>
  );
};

export default TodayShow;
