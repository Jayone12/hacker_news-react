import { useEffect, useState } from "react";
import axios from "axios";
import TodayTop from "../../components/home/TodayTop";

const TodayTopContainer = () => {
  const [topStories, setTopStories] = useState([]);

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
    getStoryIds("top", 15).then(setTopStories);
  }, []);

  return (
    <div>
      <div>
        <h3>Today’s top &gt;</h3>
        <div>
          <img src="/images/upload_time_icon.svg" alt="upload time" />
          <span>14:00</span>
        </div>
      </div>
      <ul>
        <li>
          <ul>
            {topStories.slice(0, 5).map((value, index) => (
              <TodayTop key={index} index={index + 1} value={value} />
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {topStories.slice(5, 10).map((value, index) => (
              <TodayTop key={index} index={index + 6} value={value} />
            ))}
          </ul>
        </li>
        <li>
          <ul>
            {topStories.slice(10, 15).map((value, index) => (
              <TodayTop key={index} index={index + 11} value={value} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TodayTopContainer;
