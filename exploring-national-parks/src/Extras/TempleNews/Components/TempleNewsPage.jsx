import React, { useEffect, useState } from "react";
import './TempleNewsPage.css';

const TempleAlertsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/Temple/new.json?limit=5")
      .then((res) => res.json())
      .then((data) => {
        const latestPosts = data.data.children.slice(0, 5);
        setPosts(latestPosts);
      })
      .catch((err) => console.error("Error fetching Temple news:", err));
  }, []);

  return (
    <div className="temple-news-page">
      <h1>Temple News & Alerts</h1>
      <p>Latest posts from the Temple University subreddit.</p>

      {posts.map((post) => (
        <div className="news-card" key={post.data.id}>
          <h3>{post.data.title}</h3>

          <a
            href={post.data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      ))}

    </div>
  );
};

export default TempleAlertsPage;