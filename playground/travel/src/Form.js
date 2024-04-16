import React, { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDesc] = useState("");
    const [quantity, setQuantity] = useState(5);
  
    function handleSubmit(e) {
      "";
      e.preventDefault();
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() };
      console.log(newItem);
      onAddItems(newItem);
      setDesc("");
      setQuantity(20);
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your travel </h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }