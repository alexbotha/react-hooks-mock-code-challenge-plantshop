import React from "react";
import { useState } from "react";

function NewPlantForm({ cbAddPlant }) {
  const [newPlant, setNewPlant] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  });

  function handleChange(event) {
    setNewPlant({
      ...newPlant,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const xxx = {
      id: newPlant.id,
      name: newPlant.name,
      image: newPlant.image,
      price: newPlant.price,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xxx),
    })
      .then((r) => r.json())
      .then((newPlant) => cbAddPlant(newPlant));
  }

  // const handleNewPlant = (newPlant) => {
  //   setNewPlant([...plants, newPlant]);
  // };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
