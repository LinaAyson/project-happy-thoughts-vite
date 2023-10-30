import React from "react";
import "./PostContainer.css";
import ButtonSubmit from "./ButtonSubmit";

export default function PostContainer() {
  return (
    <div className="container-question">
      <h2>What is making you happy right now?</h2>
      <form>
        <textarea rows={3} placeholder="'Ollie the best dog ever'"></textarea>
      </form>
      <div className="container-error">
        {/* <p className="error">Too short</p> */}
        <p className="length">1/140</p>
      </div>

      <ButtonSubmit />
    </div>
  );
}
