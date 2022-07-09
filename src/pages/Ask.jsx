import styled from "styled-components";
import Pagination from "../components/Pagination";
import StoryLists from "../components/StoryLists";
import useHomeDataFetch from "../hooks/useHomeDataFetch";
import usePagination from "../hooks/usePagination";

const StoryListsContainer = styled.ul`
  margin-top: 20px;
  li:not(:first-child) {
    margin-top: 16px;
  }
`;

const Ask = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { isLoading, stories } = useHomeDataFetch(
    "ask",
    offset,
    offset + limit
  );

  return (
    <>
      <img src="/images/ask_banner.png" alt="We're here!" />
      <StoryListsContainer className="inner__wrapper">
        {stories.map((value) => (
          <StoryLists value={value} key={value.id} />
        ))}
      </StoryListsContainer>
      <div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
};

export default Ask;
