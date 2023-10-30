import React from "react";
import "./ListContainer.css";

export default function ListContainer() {
  return (
    <div className="container-list">
      <div class="happy-message">
        <p>A grey day means sunshine is coming</p>
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
