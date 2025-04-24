// components/ApartmentCard.jsx
import React from "react";
import "../styles/App.css";

function ApartmentCard({ title, location, price, date, image }) {
  return (
    <div className="apartment-card fancy-card">
      <img src={image} alt={title} className="apartment-image" />
      <div className="apartment-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="price-tag">${price}/month</p>
        <small>Posted on: {date}</small>
      </div>
    </div>
  );
}

export default ApartmentCard;