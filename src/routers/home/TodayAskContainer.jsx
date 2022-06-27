import axios from "axios";
import { useEffect, useState } from "react";
import TodayAsk from "../../components/home/TodayAsk";

const TodayAskContainer = () => {
  const [askStories, setAskStories] = useState([]);

  const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";
  const getStory = async (id) => {
    const { data } = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return data;
  };

  const getStoryIds = async (type, value) => {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, value).map(getStory));
    return stories;
  };

  useEffect(() => {
    getStoryIds("ask", 5).then((stories) => {
      setAskStories(stories);
    });
  }, []);
  return (
    <div>
      <div>
        <h3>Today's Ask &gt;</h3>
      </div>
      <ul>
        {askStories.map((value, index) => (
          <TodayAsk key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayAskContainer;
