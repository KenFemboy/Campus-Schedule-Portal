import React from "react";

const Announcements = () => {
  return (
    <div>
      <div id="announcementboard">
        <h1>Announcements</h1>
        <div class="announcements-container">
          <div class="post">
            <h3>IT 4444 - 1:30 to 2:30pm</h3>
            <p>
              We will be having our exam tomorrow please be guided. Coverage are
              from lesson 2 - lesson 4
            </p>
          </div>
          <div class="post">
            <h3>IT 4444 - 1:30 to 2:30pm</h3>
            <p>
              I am not around today for some important matters. We will meet
              tomorrow at V3
            </p>
          </div>
          <div class="post">
            <h3>IT 4444 - 1:30 to 2:30pm</h3>
            <p>Please proceed at ComLab V2 </p>
          </div>
          <div class="post">
            <h3>IT 4444 - 1:30 to 2:30pm</h3>
            <p>
              I will be sending an activity for you to work on in 1/2 sheet of
              paper, it will serve as your attendance today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
