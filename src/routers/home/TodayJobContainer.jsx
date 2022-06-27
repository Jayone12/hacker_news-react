import axios from "axios";
import { useEffect, useState } from "react";
import TodayJob from "../../components/home/TodayJob";

const TodayJobContainer = () => {
  const [jobStories, setJobStories] = useState([]);

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
    getStoryIds("job", 5).then((stories) => {
      setJobStories(stories);
    });
  }, []);
  return (
    <div>
      <h3>Today's Job &gt;</h3>
      <ul>
        {jobStories.map((value, index) => (
          <TodayJob key={index} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default TodayJobContainer;
