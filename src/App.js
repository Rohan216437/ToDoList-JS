import Todos from "./components/Todos";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  return (
    <div className="mt-6 w-screen flex flex-col">
      <h1 className="text-3xl inline text-center mb-4 text-white">Todo App</h1>
      <Todos />
      <DisplayTodo />
    </div>
  );
}

export default App;
