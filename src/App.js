import Todos from "./components/Todos";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  return (
    <div className="mt-2">
      <h1 className="mt-2 bg-sky-50">Todo App</h1>
      <Todos />
      <DisplayTodo />
    </div>
  );
}

export default App;
