import useGetComment from "../hooks/useGetComment";
import Comment from "./Comment";

const Comments = ({ commentIds }) => {
  const { comments, isLoading } = useGetComment(commentIds);

  return (
    <>
      {comments?.map((comment) => (
        <Comment key={comment.id} data={comment} ids={comment.kids} />
      ))}
    </>
  );
};

export default Comments;
