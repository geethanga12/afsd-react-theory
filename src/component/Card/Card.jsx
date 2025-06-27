import React from "react";
import "./card.css";
import Button from "../../common/component/Button/Button";

export default function Card({ children, title, description, image }) {
  return (
    <div className="cardBox">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <div>
        {children}
      </div>
    </div>
  );
}
