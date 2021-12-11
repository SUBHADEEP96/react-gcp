import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Subhadeep Paul &copy; { new Date().getFullYear()}</h1>
      </header>
    </div>
  );
}

export default App;
