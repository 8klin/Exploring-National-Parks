import React, { useEffect, useState } from "react";
import "./TempleNewsPage.css";

const TempleNewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.reddit.com/r/Temple/.rss")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items.slice(0, 5)); // newest 5 posts
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
        posts.map((post, index) => (
          <div className="news-card" key={index}>
            <h3>{post.title}</h3>

            <a
              href={post.link}
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