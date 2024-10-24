import React, { useEffect, useState } from 'react';

// Helper function to extract the video ID from a YouTube URL
const getVideoID = (url) => {
  const urlParts = url.split("v=");
  return urlParts[1]?.split("&")[0];
};

function MusicLinks({ composer }) {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideoTitles = async () => {
      const promises = composer.music.map(async (link) => {
        const videoID = getVideoID(link);
        const response = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}&format=json`
        );
        const data = await response.json();
        return { title: data.title, thumbnail: data.thumbnail_url, link };
      });

      const results = await Promise.all(promises);
      setVideoData(results);
    };

    fetchVideoTitles();
  }, [composer.music]);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {videoData.map((video, index) => (
        <div
          key={index}
          style={{
            width: "200px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              style={{ width: "100%", height: "auto" }}
            />
            <p style={{ margin: "10px 0", fontWeight: "bold" }}>
              {video.title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MusicLinks