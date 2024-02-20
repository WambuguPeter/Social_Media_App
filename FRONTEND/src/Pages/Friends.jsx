import '../styles/PageStlyles/Friends.scss'
import React, { useState, useEffect } from 'react';
import data from '../assets/data.json'

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch friends data when component mounts
    fetchFriendsData();
  }, []);

  const fetchFriendsData = () => {
    setFriends(data.friends);
  };

  return (
    <div className="friends-page">
    <h2>Friends</h2>
    <div className="friends-list">
      {friends.map((friend) => (
        <div key={friend.id} className="friend">
          <img id='imgs' src={friend.avatar} alt={friend.name} />
          <div className="friend-info">
            <h3>{friend.name}</h3>
            <p>@{friend.name}</p>
            {/* <div className="options" onClick={() => handleOptionsClick(friend.id)}>
                <FontAwesomeIcon icon={faEllipsisV} />
                <div className="dropdown-menu">
                  {/* Dropdown menu options -------
                  <div className="option">Option 1</div>
                  <div className="option">Option 2</div>
                  <div className="option">Option 3</div>
                </div>
              </div> */}
            <button onClick={() => handleMessageClick(friend)}>Message</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

const handleMessageClick = (friend) => {
// Handle message button click, e.g., open chat window or navigate to messaging page
alert(`Clicked message button for ${friend.name}`);
};


export default Friends