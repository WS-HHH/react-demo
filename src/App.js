import './App.css';
import DemoUseState from './pages/Hooks/DemoUseState';
import DemoUseEffect from './pages/Hooks/DemoUseEffect';


function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
        test git
      </h1> */}

      <DemoUseState />
      <DemoUseEffect />
    </div>
  );
}

export default App;
