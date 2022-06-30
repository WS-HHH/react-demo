import './App.css';
import {
  ClassRef,
  DomRef,
} from './pages/createRef/index';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        {/* Hello world! */}
        <ClassRef />
        <DomRef />
      </h1>
    </div>
  );
}

export default App;
