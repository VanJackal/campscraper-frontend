import './components/updatedTimer';
import UpdatedTimer from './components/updatedTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Download Latest</button>
        <button>Start New Scrape</button>
        <UpdatedTimer />
      </header>
    </div>
  );
}

export default App;
