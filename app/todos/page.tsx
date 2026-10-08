"use client";

import { useEffect, useState } from "react";

const API_URL = "https://practice.amirm.me";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/todos?limit=100`)
      .then((res) => res.json())
      .then((json) => setTodos(json.data));
  }, []);

  async function addTodo() {
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) return;

    const newTodo: Todo = await res.json();

    setTodos([...todos, newTodo]);
    setTitle("");
  }
  async function toggleTodo(todo: Todo) {
    const res = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    if (!res.ok) return;
    const updated: Todo = await res.json();
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  }
  async function saveTitle(id: number) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle }),
    });
    if (!res.ok) return;
    const updated: Todo = await res.json();
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    setEditingId(null);
  }
  async function deleteTodo(id: number) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) return;

    setTodos(todos.filter((t) => t.id !== id));
  }
  return (
    <div>
      <h1>Todos</h1>

      <input 
      className="border-2 rounded-2xl px-3 border-blue-900"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button className="border-2 px-3 mx-3 border-blue-900 rounded-2xl" onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-10 border-b border-2 rounded-2xl pb-2 px-4 py-3 my-3 bg-green-300 " key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo)}
            />

            {editingId === todo.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button
                  className="border-2 ml-4 rounded-4xl px-4 cursor-pointer bg-green-500 border-blue-800"
                  onClick={() => saveTitle(todo.id)}
                >
                  Save
                </button>
                <button
                  className="border-2 ml-4 rounded-4xl px-4 cursor-pointer bg-green-500 border-blue-800"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                
                <span>{todo.title}</span>
                <button
                  className="border-2 border-x-black mx-3 rounded-3xl px-4 border-y-amber-500 bg-blue-400 "
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditTitle(todo.title);
                  }}
                >
                  Edit
                </button>
                <button className="border-2 border-y-black mx-3 rounded-3xl px-4 border-x-amber-500 bg-blue-400" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
