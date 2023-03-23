import "./comment.css";
import React from "react";
const Comment = ({ name, email, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Comment;
