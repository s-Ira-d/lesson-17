import "./App.css";
import { Counter } from "./components/Counter.jsx";
import { ChangeColor } from "./components/ChangeColor.jsx";
import { Clock } from "./components/Clock.jsx";
import { Pockemon } from "./components/Pockemon.jsx";
import { Pole } from "./components/Pole.jsx";
import { Colors } from "./components/Colors.jsx"
import { ToDoList } from "./components/ToDoList.jsx";

function App() {
  return (
    <div className="App">
     <ToDoList/>
    </div>
  );
}

export default App;
