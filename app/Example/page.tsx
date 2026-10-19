"use client";

import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com";

type Place = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export default function TodosPage() {
  const [place, setPlace] = useState<Place[]>([]);
  const [title, setTitle] = useState("");
  const [editingUserId, EditingUserId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  useEffect(() => {
    fetch(`${API_URL}/todos?_limit=100`)
      .then((res) => res.json())
      .then((json) => setPlace(json));
  }, []);
  async function addPlace() {
    const rec = await fetch(`${API_URL}/todos/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if(!rec.ok)return;
    const newPlace : Place =await rec.json();
    setPlace([...place,newPlace]);
    setTitle(""); 
  }
  return <div>
    <input type="text" placeholder="ENTER" value={title} onChange={(e) => setTitle(e.target.value)}>
    </input>
    <button onClick={addPlace}>NEW</button>
    <ul>
        {place.map((items) =>(
            <li key={items.id}>
                {items.completed ? "✅" : "⬜"} {items.title}

            </li>
        ))}

    </ul>
  </div>;
}
