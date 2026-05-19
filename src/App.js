import "./App.css";
import { Counter } from "./components/Counter.jsx";
import { Clock } from "./components/Clock.jsx";
import { Pockemon } from "./components/Pockemon.jsx";
import { Pole } from "./components/Pole.jsx";
import { Colors } from "./components/Colors.jsx";
import { ToDoList } from "./components/ToDoList.jsx";

function App() {
  return (
    <div className="App">
      <Counter />
      <Clock />
      <Pockemon />
      <Pole />
      <Colors />
      <ToDoList />
    </div>
  );
}

export default App;
