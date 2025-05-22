import './App.css';
import SearchNearbyComponent from './components/SearchNearbyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Explorer</h1>
        <p>Explore nearby restaurants and their details.</p>
        <SearchNearbyComponent />
      </header>
    </div>
  );
}

export default App;
