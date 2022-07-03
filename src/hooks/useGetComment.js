import React from "react";
import { useEffect, useState } from "react";
import { getCommentIds } from "../utils/homeApi";

const useGetComment = (ids) => {
  // 스토리 데이터 저장
  const [comments, setComments] = useState([]);
  // 데이터 불러오기에 따른 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 해당 hook이 호출 될때 실행
  useEffect(() => {
    setIsLoading(true);
    getCommentIds(ids).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []); // type 값이 변할때마다 실행된다.

  return { comments, isLoading };
};
export default useGetComment;
