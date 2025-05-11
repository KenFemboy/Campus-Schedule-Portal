import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Announcements.css";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchAnnouncements = () => {
      axios
        .get("https://campus-schedule-portal.onrender.com/api/announcements")
        .then((res) => setAnnouncements(res.data))
        .catch((err) => console.error("Error fetching announcements:", err));
    };

    fetchAnnouncements();
    const interval = setInterval(fetchAnnouncements, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !paragraph) return;

    axios
      .post(
        "https://campus-schedule-portal.onrender.com/api/createAnnouncement",
        {
          title,
          paragraph,
        }
      )
      .then((res) => {
        setAnnouncements((prev) => [res.data, ...prev]);
        setTitle("");
        setParagraph("");
      })
      .catch((err) => console.error("Error posting announcement:", err));
  };

  const handleDelete = async (title) => {
    try {
      await axios.delete(
        `https://campus-schedule-portal.onrender.com/api/announcements/${encodeURIComponent(
          title
        )}`
      );
      setAnnouncements((prev) => prev.filter((a) => a.title !== title));
    } catch (err) {
      console.error("Error deleting announcement:", err);
    }
  };

  return (
    <div>
      <div id="announcementboard">
        <h1>Announcements</h1>

        {location.pathname.startsWith("/faculty/") && (
          <form className="announcement-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Announcement details"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              required
            />
            <button type="submit">Add Announcement</button>
          </form>
        )}

        <div className="announcements-container">
          {announcements
            .slice()
            .reverse()
            .map((post, index) => (
              <div key={index} className="post">
                <h3>{post.title}</h3>
                <p>{post.paragraph}</p>
                {location.pathname === "/admin" && (
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(post.title)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
