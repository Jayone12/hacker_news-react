import axios from "axios";

const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";

// story ID를 토대로 데이터를 받아온다.
const getStory = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    console.log(`story를 호출하는데 실패하였습니다.`, error);
  }
};

// 각 스토리의 ID를 type과 불러올 개수를 인자로 받는다.
const getStoryIds = async (type, value) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    // 타입별 storyId를 갯수만큼 자르고 자른 수 만큼 story의 데이터를 불러온다.
    const stories = await Promise.all(storyIds.slice(0, value).map(getStory));
    return stories;
  } catch (error) {
    console.log(`storyId를 호출하는데 실패하였습니다.`, error);
  }
};

export default getStoryIds;
