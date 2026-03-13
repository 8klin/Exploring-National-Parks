import React, { useEffect, useMemo, useState } from "react";
import "./parkChecklist.css";

const starterItems = [
  { id: 1, name: "Water bottle", category: "Essentials", checked: true },
  { id: 2, name: "Sunscreen", category: "Essentials", checked: false },
  { id: 3, name: "Trail snacks", category: "Food", checked: false },
  { id: 4, name: "Backpack", category: "Gear", checked: true },
  { id: 5, name: "First aid kit", category: "Safety", checked: false },
  { id: 6, name: "Map / park guide", category: "Gear", checked: false },
  { id: 7, name: "Bug spray", category: "Essentials", checked: false },
  { id: 8, name: "Phone charger", category: "Tech", checked: false }
];

const categories = ["Essentials", "Food", "Gear", "Safety", "Tech"];

export default function ParkChecklist() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("parkChecklistItems");
    return saved ? JSON.parse(saved) : starterItems;
  });

  const [newItem, setNewItem] = useState("");
  const [newCategory, setNewCategory] = useState("Essentials");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("parkChecklistItems", JSON.stringify(items));
  }, [items]);

  const filteredItems = useMemo(() => {
    if (filter === "All") return items;
    if (filter === "Checked") return items.filter((item) => item.checked);
    if (filter === "Unchecked") return items.filter((item) => !item.checked);
    return items.filter((item) => item.category === filter);
  }, [items, filter]);

  const checkedCount = items.filter((item) => item.checked).length;
  const totalCount = items.length;

  function addItem(e) {
    e.preventDefault();

    const trimmed = newItem.trim();
    if (!trimmed) return;

    const createdItem = {
      id: Date.now(),
      name: trimmed,
      category: newCategory,
      checked: false
    };

    setItems((prev) => [...prev, createdItem]);
    setNewItem("");
    setNewCategory("Essentials");
  }

  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearChecked() {
    setItems((prev) => prev.filter((item) => !item.checked));
  }

  return (
    <div className="checklist-page">
      <section className="checklist-hero">
        <h1 className="checklist-title">Park Necessities Checklist</h1>
        <p className="checklist-subtitle">
          Plan ahead for your park trip by keeping track of everything you need
          to bring.
        </p>
      </section>

      <section className="checklist-content">
        <div className="checklist-card">
          <h2>Add an Item</h2>

          <form className="checklist-form" onSubmit={addItem}>
            <input
              type="text"
              placeholder="Add a new park item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />

            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <button type="submit">Add Item</button>
          </form>
        </div>

        <div className="checklist-card">
          <div className="checklist-topbar">
            <h2>Your List</h2>
            <span className="checklist-progress">
              {checkedCount} / {totalCount} packed
            </span>
          </div>

          <div className="filter-row">
            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Checked")}>Packed</button>
            <button onClick={() => setFilter("Unchecked")}>Not Packed</button>
            {categories.map((category) => (
              <button key={category} onClick={() => setFilter(category)}>
                {category}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <p className="empty-message">No items found for this filter.</p>
          ) : (
            <ul className="checklist-list">
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  className={`checklist-item ${item.checked ? "checked" : ""}`}
                >
                  <div className="item-left">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleItem(item.id)}
                    />
                    <div>
                      <p className="item-name">{item.name}</p>
                      <span className="item-category">{item.category}</span>
                    </div>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="checklist-actions">
            <button className="secondary-btn" onClick={clearChecked}>
              Clear Packed Items
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}