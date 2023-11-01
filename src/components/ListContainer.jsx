import React, {useState, useEffect} from "react";
import "./ListContainer.css";

export default function ListContainer() {

  const [data, setData] = useState([]);

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
      <div class="happy-message">
      <ul>
        {data.map((thought, index) => (
          <li key={index}>{thought.message}</li>
        ))}
      </ul>
        <div class="container-info">
          <div class="container-like">
            <button type="button" id="likeBtn" class="like-button">
              <span class="emoji" aria-label="like button">
                ❤️
              </span>
            </button>
            <span class="count-likes">x42</span>
          </div>
          <div class="container-time">16 minutes ago</div>
        </div>
      </div>
    </div>
  );
}
// Föräldern till enskild tanke 
// Mappar ut 
// FETCH DATA från apiet