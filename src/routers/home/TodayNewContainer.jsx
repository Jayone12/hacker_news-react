import { useEffect, useState } from "react";
import axios from "axios";
import TodayNew from "../../components/home/TodayNew";

const TodayNewContainer = () => {
  const [newStories, setNewStories] = useState([]);

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
    getStoryIds("new", 4).then((stories) => {
      setNewStories(stories);
    });
  }, []);
  return (
    <div>
      <div>
        <h3>Today’s New &gt;</h3>
        <div>
          <img src="/images/refresh_icon.svg" alt="refresh button" />
          <span>14:00</span>
        </div>
      </div>
      <ul>
        {newStories.map((value, index) => (
          <TodayNew key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayNewContainer;
