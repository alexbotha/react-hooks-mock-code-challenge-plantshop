import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ filterSearch }) {
  return (
    <ul className="cards">
      {filterSearch.map((plant) => {
        return <PlantCard key={plant.id} plant={plant} />;
      })}
    </ul>
  );
}

export default PlantList;
