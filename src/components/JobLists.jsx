import styled from "styled-components";
import domainFormUrl from "../utils/domainFormUrl";
import { diffTime } from "../utils/diffTime";

const JobList = styled.li`
  .user__container {
    width: 100%;
    margin-top: 20px;
    font-size: 12px;
    .story__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user__difftime {
        margin-left: 6px;
      }
    }
  }
`;

const JobLists = ({ value: { title, time, url, id } }) => {
  return (
    <JobList className="story__contianer">
      <div className="story__title">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <a href={`/detail/${id}`}>{title}</a>
        )}
      </div>
      <div className="user__container">
        <div className="story__info">
          {url ? (
            <span class="job__url">{domainFormUrl(url)}</span>
          ) : (
            <span></span>
          )}
          <span class="user__difftime">{diffTime(time)}</span>
        </div>
      </div>
    </JobList>
  );
};

export default JobLists;
