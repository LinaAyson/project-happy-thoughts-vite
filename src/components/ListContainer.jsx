import React, { useState, useEffect } from "react";
import "./ListContainer.css";

export default function ListContainer({ thought, onLike }) {
  const [data, setData] = useState([]);
  const [likedPostIds, setLikedPostIds] = useState([]);
  const [likedPostsCount, setLikedPostsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log("Fetched data:", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLike = (thoughtId) => {
    if (!thoughtId) {
      console.error("Invalid thoughtId");
      return;
    }

    // Send a POST request to like this thought
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((likedThought) => {
        // Find the thought in the data and update its hearts count
        const updatedData = data.map((thought) => {
          if (thought._id === thoughtId) {
            return { ...thought, hearts: likedThought.hearts };
          }
          return thought;
        });

        setData(updatedData);

        if (!likedPostIds.includes(thoughtId)) {
          setLikedPostsCount(likedPostsCount + 1);

          // Add the thought's ID to the likedPostIds array
          setLikedPostIds((ids) => [thoughtId, ...ids]);

          // Store liked post IDs in local storage
          localStorage.setItem("likedPostIds", JSON.stringify([thoughtId, ...likedPostIds]));
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  function formatTime(timestamp) {
    const thoughtTime = new Date(timestamp);
    const currentTime = new Date();

    const timeDifferenceInSeconds = Math.floor(
      (currentTime - thoughtTime) / 1000
    );

    if (timeDifferenceInSeconds < 60) {
      return `${timeDifferenceInSeconds} second${
        timeDifferenceInSeconds !== 1 ? "s" : ""
      } ago`;
    } else if (timeDifferenceInSeconds < 3600) {
      const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
      return `${timeDifferenceInMinutes} minute${
        timeDifferenceInMinutes !== 1 ? "s" : ""
      } ago`;
    } else {
      const timeDifferenceInHours = Math.floor(timeDifferenceInSeconds / 3600);
      return `${timeDifferenceInHours} hour${
        timeDifferenceInHours !== 1 ? "s" : ""
      } ago`;
    }
  }

  return (
    <div className="container-list">
      {data.map((thought, index) => (
        <div className="happy-message" key={index}>
          {thought.message}

          <div className="container-info">
            <div className="container-like">
              <button
                type="button"
                id="likeBtn"
                className="like-button"
                onClick={() => handleLike(thought._id)}
              >
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
