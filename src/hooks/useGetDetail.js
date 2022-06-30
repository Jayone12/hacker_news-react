import { useEffect, useState } from "react";
import getStoryIds, { getStory } from "../utils/homeApi";

const useGetDetail = (id) => {
  // 스토리 데이터 저장
  const [story, setStory] = useState([]);
  // 데이터 불러오기에 따른 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 해당 hook이 호출 될때 실행
  useEffect(() => {
    setIsLoading(true);
    getStory(id).then((story) => setStory(story));
  }, []); // type 값이 변할때마다 실행된다.

  return { story, isLoading };
};
export default useGetDetail;
