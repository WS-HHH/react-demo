import './App.css';
import DemoUseState from './pages/Hooks/DemoUseState';
import DemoUseEffect from './pages/Hooks/DemoUseEffect';
import DemoUseContext from './pages/Hooks/DemoUseContext';
import DemoUseId from './pages/Hooks/DemoUseId';
import DemoUseReducer from './pages/Hooks/DemoUseReducer';
import DemoUseMemo from './pages/Hooks/DemoUseMemo';

function App() {
  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
        test git
      </h1> */}

      <DemoUseState />
      <DemoUseEffect />
      <DemoUseContext />
      <DemoUseId />
      <DemoUseReducer />
      <DemoUseMemo />
    </div>
  );
}

export default App;
