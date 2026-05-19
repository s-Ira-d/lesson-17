import { useState } from "react";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (text === "") return;

    setTasks([...tasks, text]);
    setText("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);

    setTasks(newTasks);
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={addTask}>Додати</button>

      {tasks.map((task, index) => (
        <div key={index}>
          {task}

          <button onClick={() => deleteTask(index)}>Видалити</button>
        </div>
      ))}
    </div>
  );
};
