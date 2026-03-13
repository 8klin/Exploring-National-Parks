import React, { useEffect, useState } from "react";
import "./TempleNewsPage.css";

const TempleNewsPage = () => {
  const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch(
    "https://corsproxy.io/?https://www.reddit.com/r/Temple/new.json?limit=5"
  )
    .then((res) => res.json())
    .then((data) => {
      setPosts(data?.data?.children || []);
    })
    .catch((err) => console.error("Error fetching Temple news:", err));
}, []);

  return (
    <div className="temple-news-page">
      <h1>Temple News & Alerts</h1>
      <p>Latest posts from the Temple subreddit.</p>

      {posts.length === 0 ? (
        <p>Loading latest news...</p>
      ) : (
        posts.map((post) => (
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
        ))
      )}
    </div>
  );
};

export default TempleNewsPage;