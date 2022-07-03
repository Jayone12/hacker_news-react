import React, { useEffect, useState } from "react";
import useGetComment from "../hooks/useGetComment";

const Comment = ({ data, ids }) => {
  const { comments, isLoading } = useGetComment(data.kids);

  return (
    <div>
      <div style={{ backgroundColor: "tomato" }}>{data.by}</div>
      <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
      {comments?.map((comment) => (
        <div style={{ paddingLeft: "20px" }}>
          <div style={{ backgroundColor: "blue" }}>{comment.by}</div>
          <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
          <div style={{ color: "red" }}>{comment.kids}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
