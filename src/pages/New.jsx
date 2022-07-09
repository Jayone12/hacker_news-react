import usePagination from "../hooks/usePagination";
import useHomeDataFetch from "../hooks/useHomeDataFetch";
import styled from "styled-components";
import StoryLists from "../components/StoryLists";
import Pagination from "../components/Pagination";

const StoryListsContainer = styled.ul`
  margin-top: 20px;
  li:not(:first-child) {
    margin-top: 16px;
  }
`;

const New = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { isLoading, stories } = useHomeDataFetch(
    "new",
    offset,
    offset + limit
  );

  return (
    <>
      <img
        src="/images/new_banner.png"
        alt="NEW Articles, Check out the new articles that are comming up in real time."
      />
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

export default New;
