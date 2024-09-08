import logo from './logo.svg';
import amma1 from './amma1.jpeg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={amma1} className="App-logo" alt="logo" />

        <p>
         good morning
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
