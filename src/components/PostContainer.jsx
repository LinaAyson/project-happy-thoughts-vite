import React, { useState, useEffect } from "react";
import "./PostContainer.css";
import "./ButtonSubmit.css";

export default function PostContainer({data}) {
  const [thought, setThought] = useState('');


  const handlePost = async () => {
    const postData = {
      message: thought, 
    };

    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear the input field after a successful POST
      setThought('');
      // Reload the page after clicking on the button
      window.location.reload();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="container-question">   
        <h2>What is making you happy right now?</h2>
    <form>
      <textarea
        style={{ resize: 'none' }} 
        rows={3}
        placeholder="'If music be the food of love, play on. - William Shakespeare'"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
    </form>
    <div className="container-error">
      <p className="length">{thought.length}/140</p>
    </div>
    <button className="submitPost" onClick={handlePost}>
      <span class="emoji" aria-label="heart emoji">
        ❤️
      </span>
      Send Happy Thought
      <span class="emoji" aria-label="heart emoji">
        ❤️
      </span></button>
  </div>
  );
}
// API POST
