import usePagination from "../hooks/usePagination";
import useHomeDataFetch from "../hooks/useHomeDataFetch";
import StoryLists from "../components/StoryLists";
import Pagination from "../components/Pagination";

const New = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { isLoading, stories } = useHomeDataFetch(
    "new",
    offset,
    offset + limit
  );

  return (
    <div>
      <div></div>
      <ul>
        {stories.map((value) => (
          <StoryLists value={value} key={value.id} />
        ))}
      </ul>
      <div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default New;
