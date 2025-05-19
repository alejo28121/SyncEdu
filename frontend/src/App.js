import {useState} from 'react';
import './App.css';
import RenderAuth from './AuthPage.js';

function App() {
  const [authValue, setAuthValue] = useState(1); 
  return (
    <div className="App">
      <header className="App-header">
        <RenderAuth value={authValue} setValue={setAuthValue}/>
      </header>
    </div>
  );
}

export default App;
