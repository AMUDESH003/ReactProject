import React, { useState } from "react";

function Todolist() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  function handleAdd() {
    if (value !== '') {
      setList([...list, value]);
      setValue('');
    }
  }

  function handleClear() {
    setList([]);
    setValue('');
  }

  function handleDelete(index) {
    setList(list.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditValue(list[index]);
  }

  function handleUpdate() {
    if (editValue !== '') {
      setList(list.map((item, i) => (i === editIndex ? editValue : item)));
      setEditIndex(null);
      setEditValue('');
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>

      {editIndex !== null && (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Edit todo"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
