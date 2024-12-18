// src/components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    updateTask({ ...task, name: editedName, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Mettre à jour</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <p>{task.description}</p>
        </>
      )}
      <button onClick={handleComplete}>
        {task.completed ? 'Annuler Terminé' : 'Marquer Terminé'}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? 'Annuler' : 'Modifier'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </li>
  );
}

export default TaskItem;
