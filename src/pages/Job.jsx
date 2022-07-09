import JobLists from "../components/JobLists";
import Pagination from "../components/Pagination";
import useHomeDataFetch from "../hooks/useHomeDataFetch";
import usePagination from "../hooks/usePagination";
import styled from "styled-components";

const StoryListsContainer = styled.ul`
  margin-top: 20px;
  li:not(:first-child) {
    margin-top: 16px;
  }
`;

const Job = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { isLoading, stories } = useHomeDataFetch(
    "job",
    offset,
    offset + limit
  );

  return (
    <>
      <img src="/images/job_banner.png" alt="FIND YOUR IDEAL JOB" />
      <StoryListsContainer className="inner__wrapper">
        {stories.map((value) => (
          <JobLists value={value} key={value.id} />
        ))}
      </StoryListsContainer>
      <div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Job;
