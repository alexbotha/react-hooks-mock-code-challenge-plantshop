import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((r) => r.json())
      .then((plantsArray) => {
        setPlants(plantsArray);
      });
  }, []);

  function cbAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function changeSearch(e) {
    setSearchTerm(e);
  }

  const filterSearch = plants.filter((plant) =>
    plant.name.toLowerCase().startsWith(searchterm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm cbAddPlant={cbAddPlant} />
      <Search changeSearch={changeSearch} />
      <PlantList filterSearch={filterSearch} />
    </main>
  );
}

export default PlantPage;
