import React, { useState } from 'react';

const TodoApp = () => {
  const [bags, setBags] = useState([]);
  const [newBag, setNewBag] = useState('');
  const [editBagIndex, setEditBagIndex] = useState(null);
  const [editBagName, setEditBagName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editBagIndex !== null) {
      
      if (editBagName.trim() !== '') {
        const updatedBags = bags.map((bag, index) => {
          if (index === editBagIndex) {
            return { ...bag, name: editBagName };
          }
          return bag;
        });

        setBags(updatedBags);
        setEditBagIndex(null);
        setEditBagName('');
      }
    } else {
      
      if (newBag.trim() !== '') {
        const newTask = {
          name: newBag,
          isCompleted: false
        };

        setBags([...bags, newTask]);
        setNewBag('');
      }
    }
  };

  const handleEdit = (index) => {
    const bag = bags[index];
    setEditBagIndex(index);
    setEditBagName(bag.name);
  };

  const handleDelete = (index) => {
    const updatedBags = bags.filter((_, i) => i !== index);
    setBags(updatedBags);
  };

  const handleComplete = (index) => {
    const updatedBags = bags.map((bag, i) => {
      if (i === index) {
        return { ...bag, isCompleted: !bag.isCompleted };
      }
      return bag;
    });

    setBags(updatedBags);
  };

  return (
    <div>
      <h1>TODO App</h1>
      <form onSubmit={handleSubmit}>
        {editBagIndex !== null ? (
          <>
            <input
              type="text"
              value={editBagName}
              onChange={(e) => setEditBagName(e.target.value)}
              placeholder="Enter updated task"
            />
            <button type="submit">Update</button>
            <button onClick={() => setEditBagIndex(null)}>Cancel</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={newBag}
              onChange={(e) => setNewBag(e.target.value)}
              placeholder="Enter a new bag/task"
            />
            <button type="submit">Add</button>
          </>
        )}
      </form>
      <ul>
        {bags.map((bag, index) => (
          <li key={index}>
            {bag.name} - {bag.isCompleted ? 'Completed' : 'Incomplete'}
            {!bag.isCompleted && (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleComplete(index)}>Complete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
