// components/ApartmentList.jsx
import React from "react";
import ApartmentCard from "./ApartmentCard";
import "../App.css";

const dummyApartments = Array.from({ length: 10 }, (_, i) => ({
  title: `Apartment ${i + 1}`,
  location: "Near University XYZ",
  price: 1200 + i * 50,
  date: "2025-04-21",
  image: `https://via.placeholder.com/300x200?text=Apartment+${i + 1}`,
}));

function ApartmentList() {
  return (
    <div className="apartment-list">
      {dummyApartments.map((apt, idx) => (
        <ApartmentCard key={idx} {...apt} />
      ))}
    </div>
  );
}

export default ApartmentList;