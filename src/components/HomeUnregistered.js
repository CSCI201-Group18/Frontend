import React from "react";

function HomeUnregistered() {
  return (
    <div className="home-page">
      <h1 className="title">Unregistered Home Page</h1>
      <div className="image-boxes">
        <div className="image-box">
          <img src="https://via.placeholder.com/300x200" alt="Image 1" />
          <p>Image 1</p>
        </div>
        <div className="image-box">
          <img src="https://via.placeholder.com/300x200" alt="Image 2" />
          <p>Image 2</p>
        </div>
        <div className="image-box">
          <img src="https://via.placeholder.com/300x200" alt="Image 3" />
          <p>Image 3</p>
        </div>
      </div>
    </div>
  );
}

export default HomeUnregistered;
