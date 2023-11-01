import React, {useState, useEffect} from "react";
import "./ListContainer.css";

export default function ListContainer({thought, onLike}) {
  const handleLikeClick = () => {
    onLike(thought._id);
  };


  const [data, setData] = useState([]);

  function formatTime(timestamp) {
    const thoughtTime = new Date(timestamp);
    const currentTime = new Date();
  
    const timeDifferenceInSeconds = Math.floor((currentTime - thoughtTime) / 1000); 
  
    if (timeDifferenceInSeconds < 60) {
      // If less than 60 seconds, display in seconds
      return `${timeDifferenceInSeconds} second${timeDifferenceInSeconds !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      // If less than 1 hour, display in minutes
      const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${timeDifferenceInMinutes} minute${timeDifferenceInMinutes !== 1 ? 's' : ''} ago`;
    } else {
      // If 1 hour or more, display in hours
      const timeDifferenceInHours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${timeDifferenceInHours} hour${timeDifferenceInHours !== 1 ? 's' : ''} ago`;
    }
  }

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };

  fetchData();
}, []);



  return (
    <div className="container-list">
      {data.map((thought, index) => (
        <div className="happy-message" key={index}>
            {thought.message}

          <div className="container-info">
        <div className="container-like">
          <button type="button" id="likeBtn" className="like-button" onClick={handleLikeClick}>
            <span className="emoji" aria-label="like button">❤️</span>
          </button>
          <span className="count-likes">{thought.hearts}</span>
        </div>
        <div className="container-time">
          {formatTime(thought.createdAt)}
        </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// Föräldern till enskild tanke 
// Mappar ut 
// FETCH DATA från apiet