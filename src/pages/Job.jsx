import Pagination from "../components/Pagination";
import StoryLists from "../components/StoryLists";
import useHomeDataFetch from "../hooks/useHomeDataFetch";
import usePagination from "../hooks/usePagination";

const Job = () => {
  const { limit, page, setPage, offset } = usePagination(1, 10);
  const { isLoading, stories } = useHomeDataFetch(
    "show",
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

export default Job;
