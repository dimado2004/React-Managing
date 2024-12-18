// src/components/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const newTask = {
        id: Date.now(),
        name,
        description,
        completed: false,
      };
      addTask(newTask);
      setName('');
      setDescription('');
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom de la tâche"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description de la tâche"
      />
      <button type="submit">Ajouter la tâche</button>
    </form>
  );
}

export default TaskForm;
