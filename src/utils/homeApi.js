import axios from "axios";

const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";

// story ID를 토대로 데이터를 받아온다.
export const getStory = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    console.log(`story를 호출하는데 실패하였습니다.`, error);
  }
};

// 각 스토리의 ID를 type과 불러올 개수를 인자로 받는다.
export const getStoryIds = async (type, start, last) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    // 타입별 storyId를 갯수만큼 자르고 자른 수 만큼 story의 데이터를 불러온다.
    const stories = await Promise.all(
      storyIds.slice(start, last).map(getStory)
    );
    return stories;
  } catch (error) {
    console.log(`storyId를 호출하는데 실패하였습니다.`, error);
  }
};

export const getCommentIds = async (ids) => {
  try {
    if (ids === undefined) {
      return;
    }
    const comments = await Promise.all(ids.map(getStory));
    return comments;
  } catch (error) {
    console.log(`commentId를 호출하는데 실패하였습니다.`, error);
  }
};
