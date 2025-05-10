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
        .get("http://localhost:8000/api/announcements")
        .then((res) => setAnnouncements(res.data))
        .catch((err) => console.error("Error fetching announcements:", err));
    };

    fetchAnnouncements(); // initial fetch
    const interval = setInterval(fetchAnnouncements, 15000); // refresh every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !paragraph) return;

    axios
      .post("http://localhost:8000/api/createAnnouncement", {
        title,
        paragraph,
      })
      .then((res) => {
        // Prepend the new announcement to the list
        setAnnouncements((prev) => [res.data, ...prev]);
        // Reset form fields
        setTitle("");
        setParagraph("");
      })
      .catch((err) => console.error("Error posting announcement:", err));
  };

  return (
    <div>
      <div id="announcementboard">
        <h1>Announcements</h1>

        {/* Only show form if path is /faculty */}
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
