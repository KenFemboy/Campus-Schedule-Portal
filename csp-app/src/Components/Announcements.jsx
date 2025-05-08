import React from "react";
import { useEffect, useState } from "react";
import "./Announcements.css";
import axios from "axios";
const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

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

  return (
    <div>
      <div id="announcementboard">
        <h1>Announcements</h1>
        <div className="announcements-container">
          {announcements.map((post, index) => (
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
