import styled from "styled-components";
import Pagination from "../components/Pagination";
import StoryLists from "../components/StoryLists";
import useHomeDataFetch from "../hooks/useHomeDataFetch";
import usePagination from "../hooks/usePagination";

const StoryListsContainer = styled.div`
  margin-top: 20px;
  li:not(:first-child) {
    margin-top: 16px;
  }
`;

const Top = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { isLoading, stories } = useHomeDataFetch(
    "top",
    offset,
    offset + limit
  );

  return (
    <>
      <img src="/images/top_banner.png" alt="Check out the top-!" />
      <StoryListsContainer className="inner__wrapper">
        <ul>
          {stories.map((value) => (
            <StoryLists value={value} key={value.id} />
          ))}
        </ul>
        <div>
          <Pagination page={page} setPage={setPage} />
        </div>
      </StoryListsContainer>
    </>
  );
};

export default Top;
