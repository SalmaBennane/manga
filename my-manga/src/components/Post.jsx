import React from "react";

const Post = (props) => {
  const { img, cat, title, date, isHome } = props;
  const imageUrl = "http://localhost:8800/mangas";
  return (
    <div className="Post">
      <div className="post-image-container">
        <img src={`${imageUrl}/${img}`} alt="" className="post-image" />
      </div>
      <div className="post-title">{title}</div>
      {isHome && (
        <div className="post-footer">
          <div className="post-content-item">
            <span>Category: </span>
            <div>{cat}</div>
          </div>
          <div className="post-content-item">
            <span>Date: </span>
            <div>{date}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
