import './App.css';
import TodoList from './pages/TodoList';

// 容器组件
function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <TodoList />
    </div>
  );
}

export default App;
