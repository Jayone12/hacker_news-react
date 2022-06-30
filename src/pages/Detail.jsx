import React from "react";
import { useParams } from "react-router";
import Comments from "../components/Comments";
import useGetDetail from "../hooks/useGetDetail";

const Detail = () => {
  const { id } = useParams();
  const { story, isLoading } = useGetDetail(id);

  const convertTime = (time) => {
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
    return `${year}-${month}-${day}`;
  };

  console.log(story);
  return (
    <div>
      <h2>{story.title}</h2>
      <div>
        <span>by: {story.by} | </span>
        <span>written day: {convertTime(story.time)}</span>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: story.text }}></div>
      <hr />
      <Comments commentIds={story.kids} />
    </div>
  );
};

export default Detail;
