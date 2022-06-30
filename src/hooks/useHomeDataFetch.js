import { useEffect, useState } from "react";
import { getStoryIds } from "../utils/homeApi";

const useHomeDataFetch = (type, start, last) => {
  // 스토리 데이터 저장
  const [stories, setStories] = useState([]);
  // 데이터 불러오기에 따른 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 해당 hook이 호출 될때 실행
  useEffect(() => {
    setIsLoading(true);
    getStoryIds(type, start, last)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [last]); // type 값이 변할때마다 실행된다.

  return { stories, isLoading };
};
export default useHomeDataFetch;
