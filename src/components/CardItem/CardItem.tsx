import React from "react";
import "./styles.css";

type CardItemProps = {
  title: string;
  description: string;
  image?: string;
};

const CardItem: React.FC<CardItemProps> = ({ title, description, image }) => {
  return (
    <div className="card-wrapper">
      <div className="img-container">
        <img
          className="img-style"
          src={image ? image : "https://placehold.co/800x600.png"}
        />
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default CardItem;
